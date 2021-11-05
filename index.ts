import * as tf from '@tensorflow/tfjs'

/**
 * main model set up config
 */
// const getSetUpModel = () => {
//     const model = tf.sequential({
//         layers: [
//             tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}),
//             tf.layers.dense({units: 10, activation: 'softmax'}),
//         ]
//     })
//     return model
// }
//
// const model = getSetUpModel()
//
// model.compile({
//     optimizer: 'sgd',
//     loss: 'categoricalCrossentropy',
//     metrics: ['accuracy']
// })

/**
 * main fit method
 */
// async function fit() {
//     // Generate dummy data.
//     const data = tf.randomNormal([100, 784])
//     const labels = tf.randomUniform([100, 10])
//
//     function onBatchEnd(batch, logs) {
//         console.log('Accuracy', logs.acc)
//     }
//
// // Train for 5 epochs with batch size of 32.
//     model.fit(data, labels, {
//         epochs: 5,
//         batchSize: 32,
//         callbacks: {onBatchEnd}
//     }).then(info => {
//         console.log('Final accuracy', info.history.acc)
//     })
// }

// fit()
const canvas = document.querySelector('canvas')
const CANVAS_WIDTH = canvas?.width || 0
const CANVAS_HEIGHT = canvas?.height || 0

// const imageTensor = tf.randomUniform([CANVAS_HEIGHT, CANVAS_WIDTH, 3], 0, 255, 'int32')
// //@ts-ignore
// tf.browser.toPixels(imageTensor, canvas).then((res) => {
//     imageTensor.print()
//     // imageTensor.dispose()
// })

const imageDom = document.querySelector('img')

if (imageDom) {
    const imageLoadTensor = tf.browser.fromPixels(imageDom, 1)
    imageLoadTensor.print()
    //@ts-ignore
    tf.browser.toPixels(imageLoadTensor, canvas).then((res) => {
        // imageTensor.dispose()
    })
    // imageLoadTensor.dispose()
}

// const start = async () => {
//     console.log('start run')
//     await fit()
//     const input = [[1, 10]]
//     const predictX = tf.tensor(input, [1, 2])
//     console.log('end fit run')
//     predictX.print()
//     const res = await model.predict(predictX).toString()
//     console.log(res)
// }

// start()
