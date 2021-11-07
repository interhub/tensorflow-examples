// const tf = require('@tensorflow/tfjs-node')
import * as tf from '@tensorflow/tfjs-node'
import * as fs from 'fs'


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

const x = tf.tensor1d([0, 1, 2], 'int32')
x.print()
tf.oneHot(x, 3).print()

// tf.linspace(0, 100, 5).print()

saveTensorLikeImage('image_copy.jpg', sumImageTensor)
