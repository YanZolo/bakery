const promise = () => {
    new Promise((resolve, reject) => {
        if (reject) {
            console.log('error', reject)
        }
        resolve()
    })
        .then(() => {
            setTimeout(() => {
                console.log('start test, phase 1')
            }, 1000)
        })
        .then(() => {
            setTimeout(() => {
                console.log(' phase 2')
            }, 2000)
        })
        .then(() => {
            setTimeout(() => {
                console.log('phase 3')
            }, 3000)
        })


        .catch((error) => {
            console.log('error', error)
        })

}


promise()

