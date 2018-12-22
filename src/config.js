/* eslint-disable */
const conf = {
    "production": {
        api:"http://151.80.41.202:7171"
    },
    "development": {
        api:"http://localhost:7171"
    }

}
export default conf[process.env.NODE_ENV]
