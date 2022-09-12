const express = require("express");
const router =express.Router();
const RentingBl=require("../BL/RentingBl")

router.route('/')
.get(async function(req,res){   
   let data=await RentingBl.getAllRenting();
   return res.json(data)
})

router.route('/:id')
.get(async function(req,res){
   let id=req.params.id;   
   let data=await RentingBl.getRentingByID(id);
   return res.json(data)
})

router.route('/')
.post(async function(req,res){
   let body=req.body
   let data=await RentingBl.createRenting(body);
   return res.json(data)
})

router.route('/:id')
.put(async function(req,res){
   let id=req.params.id;
   let body=req.body;
   let data=await RentingBl.updateRenting(id,body);
   return res.json(data)
})

router.route('/:id')
.delete(async function(req,res){
   let id=req.params.id;
   let data=await RentingBl.deleteRenting(id);
   return res.json(data)
})


module.exports=router