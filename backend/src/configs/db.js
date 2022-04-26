require("dotenv").config();
const {connect} = require("mongoose");
let database = process.env.DB;
module.exports = ()=>{
    return connect(database);
}

