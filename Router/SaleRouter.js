const express = require("express");
const router =express.Router();
const SaleBl=require("../BL/SaleBl")

router.route('/')
.get(async function(req,res){   
   let data=await SaleBl.getAllSale();
   return res.json(data)
})

router.route('/:id')
.get(async function(req,res){
   let id=req.params.id;   
   let data=await SaleBl.getSaleByID(id);
   return res.json(data)
})

router.route('/')
.post(async function(req,res){
   let body=req.body
   let data=await SaleBl.createSale(body);
   return res.json(data)
})

router.route('/:id')
.put(async function(req,res){
   let id=req.params.id;
   let body=req.body;
   let data=await SaleBl.updateSale(id,body);
   return res.json(data)
})

router.route('/:id')
.delete(async function(req,res){
   let id=req.params.id;
   let data=await SaleBl.deleteSale(id);
   return res.json(data)
})


module.exports=router