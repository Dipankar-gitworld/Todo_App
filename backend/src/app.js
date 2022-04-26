const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());

const todoController = require("./controllers/todoList.controller")
app.use("/" , todoController);


module.exports = app;