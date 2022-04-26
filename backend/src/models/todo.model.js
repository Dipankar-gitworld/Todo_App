const { Schema, model } = require("mongoose");


const todoSchema = new Schema({
    "title" : { type: String, required: false },
    "description" : { type: String, required: false },
    "status" : { type: Boolean, required: true }
})

module.exports = model("todo_list", todoSchema);