
const SaleModel=require("../Models/SaleModel")


exports.getAllSale = function()
{
    return new Promise((resolve, reject) =>
    {
        SaleModel.find({}, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

exports.getSaleByID = function(id)
{
    return new Promise((resolve, reject) =>
    {
        SaleModel.findById(id, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                
                resolve(data)
            }
        })
    })
}

exports.createSale = function(obj)
{
    return new Promise((resolve, reject) =>
    {

        let sale=new SaleModel({
            "name":obj.name,
            "producer":obj.producer,
            "model":obj.model,
            "state":obj.state,
            "company":obj.company,
            "engine":obj.engine,
            "year_of_production":obj.year_of_production,
            "km":obj.km,
            "numOfSites":obj.numOfSites,
            "color":obj.color,
            "price":obj.price,
            "count":obj.count,
        });
        sale.save(function(err)
        { 
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Created !")
            }
        })
    })
}

exports.updateSale = function(id,obj)
{
    return new Promise((resolve, reject) =>
    {


        SaleModel.findByIdAndUpdate(id,
            {
                "name":obj.name,
                "producer":obj.producer,
                "model":obj.model,
                "state":obj.state,
                "company":obj.company,
                "engine":obj.engine,
                "year_of_production":obj.year_of_production,
                "km":obj.km,
                "numOfSites":obj.numOfSites,
                "color":obj.color,
                "price":obj.price,
                "count":obj.count,

            }, function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    
                    resolve("Updated !")
                }
            })

    })

}

exports.deleteSale = function(id)
{
    return new Promise((resolve, reject) =>
    {
        SaleModel.findByIdAndDelete(id, function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                
                resolve("deleted!")
                
            }
        })
    })
}