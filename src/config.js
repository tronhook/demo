/* eslint-disable */
const conf = {
    "production": {
        api:"https://demo.tronhook.org",
        ws:"wss://wss.tronhook.org"
    },
    "development": {
        api:"http://localhost:7171",
        ws:"ws://localhost:7272"
    }

}
export default conf[process.env.NODE_ENV]