/* eslint-disable */
const conf = {
    "production": {
        api:"http://151.80.41.202:7070",
        ws:"wss://wss.trxplorer.io"
    },
    "development": {
        api:"http://localhost:7171",
        ws:"ws://localhost:7272"
    }

}
export default conf[process.env.NODE_ENV]
