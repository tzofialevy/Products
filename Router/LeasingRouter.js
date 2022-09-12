const express = require("express");
const router =express.Router();
const LeasingBl=require("../BL/LeasingBl")

router.route('/')
.get(async function(req,res){   
   let data=await LeasingBl.getAllLeasing();
   return res.json(data)
})

router.route('/:id')
.get(async function(req,res){
   let id=req.params.id;   
   let data=await LeasingBl.getLeasingByID(id);
   return res.json(data)
})

router.route('/')
.post(async function(req,res){
   let body=req.body
   let data=await LeasingBl.createLeasing(body);
   return res.json(data)
})

router.route('/:id')
.put(async function(req,res){
   let id=req.params.id;
   let body=req.body;
   let data=await LeasingBl.updateLeasing(id,body);
   return res.json(data)
})

router.route('/:id')
.delete(async function(req,res){
   let id=req.params.id;
   let data=await LeasingBl.deleteLeasing(id);
   return res.json(data)
})


module.exports=router