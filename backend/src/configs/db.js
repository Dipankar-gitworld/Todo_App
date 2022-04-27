
const {connect,Promise} = require("mongoose");
// Promise = global.Promise;
require(`dotenv`).config();
// const username = process.env.MONGO_USERNAME;
// const password = process.env.MONGO_PASSWORD;
module.exports = ()=>{
    return connect("mongodb+srv://dipankar10:dipankar100@cluster0.hmrsq.mongodb.net/TOdo?retryWrites=true&w=majority");
}

