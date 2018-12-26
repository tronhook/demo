/* eslint-disable */
const conf = {
    "production": {
        api:"https://tronhook.trxplorer.io",
        ws:"wss://wss.trxplorer.io"
    },
    "development": {
        api:"http://localhost:7171",
        ws:"ws://localhost:7272"
    }

}
export default conf[process.env.NODE_ENV]