import * as tf from '@tensorflow/tfjs-node'
import * as fs from 'fs'
import fm from 'file-manipulator'
import cluster from 'cluster'
import os from 'os'

const numCPUs = os.cpus().length

const saveTensorLikeImage = (fileFullName: string, tensor: tf.Tensor<any>) => {
    tf.node.encodeJpeg(tensor).then((file) => {
        fs.writeFileSync(fileFullName, file)
        console.log('end success')
    })
}

const imageFile = fs.readFileSync('./img.jpg')
const imageRealTensorNewImage = tf.node.decodeImage(imageFile)
// console.log(tensorNewImage.shape)
const randomImageTensor = tf.randomUniform(imageRealTensorNewImage.shape, 0, 255)
const sumImageTensor = tf.add(randomImageTensor, imageRealTensorNewImage)

// const flippedImageTensor = tf.reverse(tensorNewImage, 1)

// tf.linspace(0, 100, 5).print()

// saveTensorLikeImage('image_copy.jpg', sumImageTensor)

const getMemoryGb = () => process.memoryUsage().heapUsed / 1024 / 1024 / 1024 //GB

const start = new Date().valueOf()

const startWrite = async (i: number) => {
    const {result} = await fm.read.file({name: 'image64', ext: 'txt', path: './',})
    await fm.create.file({
        name: 'imge64',
        ext: 'jpg',
        path: './',
        replaceExisting: true,
        encoding: 'base64',
        content: result
    })
    const endTime = new Date().valueOf()
    const memoryAfter = getMemoryGb()
    console.log('end', i, endTime - start, {memory: memoryAfter})
}

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork()
    }
    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died')
    })
} else {
    const startCycle = async () => {
        for (let i = 0; i < 10; i++) {
            startWrite(i)
        }
    }
    startCycle()
}




