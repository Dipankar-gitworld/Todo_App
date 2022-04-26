const express = require("express");
const TodoList = require("../models/todo.model");

const router = express.Router();


router.get("/", async (req,res)=>{
    try{
        let list = await TodoList.find().lean().exec();
        return res.status(200).send(list);

    }catch(error){
        return res.status(400).json({status: "failed",message: error});
    }
})

router.get("/:id", async (req,res)=>{
    try{
        let list = await TodoList.findById(req.params.id).lean().exec();
        return res.status(200).send(list);

    }catch(error){
        return res.status(400).json({status: "failed",message: error});
    }
})

router.post("/", async (req,res)=>{
    try{

        let list = await TodoList.create(req.body);
        return res.status(201).send(list)

    }catch(error){
        return res.status(400).json({status: "failed",message: error});
    }
})

router.patch("/:id", async (req,res)=>{
    try{

        let list = await TodoList.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.send(list);

    }catch(error){
        return res.status(400).json({status: "failed",message: error});
    }
})

router.delete("/:id" , async (req,res)=>{
    try{
        let list = await TodoList.findByIdAndDelete(req.params.id);
        return res.send(list);

    }catch(error){
        return res.status(400).json({status: "failed",message: error});
    }
})

module.exports = router;