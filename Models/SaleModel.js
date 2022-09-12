const mongoose=require("mongoose")

let SaleSchema=new mongoose.Schema({
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
let SaleModel=mongoose.model('sale',SaleSchema)
module.exports=SaleModel;