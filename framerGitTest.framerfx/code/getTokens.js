"use strict"

const Axios = require("axios")
const Fs = require("fs")
const Path = require("path")

async function downloadTokens() {
    const path = Path.resolve(__dirname, '', '_style-params.scss')
    const url =
    "https://dsmexample.invisionapp.com/dsm-export/in-vision-dsm/example-library/_style-params.scss?snapshotId=5e613286e1e2f0e2c6de00da&key=HyE5WfJWkX"

    const response = await Axios({
        method: "GET",
        url: url,
        responseType: "stream",
    })

    response.data.pipe(Fs.createWriteStream(path))

    return new Promise((resolve, reject) => {
        response.data.on("end", () => {
            resolve()
        })

        response.data.on("error", (err) => {
            reject(err)
        })
    })
}

downloadTokens()
