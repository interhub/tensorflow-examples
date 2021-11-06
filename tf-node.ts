// import tf from '@tensorflow/tfjs-node'
// import fs from 'fs'

const tf = require('@tensorflow/tfjs-node')
const fs = require('fs')
// const imageTensor = tf.randomUniform([300, 300, 3], 0, 255)
//
// //@ts-ignore
// tf.node.encodePng(imageTensor, 9).then((file) => {
//     fs.writeFileSync('image.png', file)
// })

const imageFile = fs.readFileSync('./img.jpg')
const tensorNewImage = tf.node.decodeImage(imageFile, 1)

tensorNewImage.print()

tf.node.encodeJpeg(tensorNewImage).then((file) => {
    fs.writeFileSync('image_copy.jpg', file)
    console.log('end success')
})
