const mongoose=require("mongoose")

let LeasingSchema=new mongoose.Schema({
    "name":String,
    "producer":String,
    "model":String,
    "state":String,
    "company":String,
    "engine":String,
    "year_of_production":Number,
    "km":Number,
    "numOfSites":Number,
    "color":String,
    "price":Number,
    "count":Number,
    
})
let LeasingModel=mongoose.model('leasing',LeasingSchema)
module.exports=LeasingModel;