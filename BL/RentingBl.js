
const RentingModel=require("../Models/RentingModel")


exports.getAllRenting = function()
{
    return new Promise((resolve, reject) =>
    {
        RentingModel.find({}, function(err, data)
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

exports.getRentingByID = function(id)
{
    return new Promise((resolve, reject) =>
    {
        RentingModel.findById(id, function(err, data)
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

exports.createRenting = function(obj)
{
    return new Promise((resolve, reject) =>
    {

        let renting=new RentingModel({
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
        renting.save(function(err)
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

exports.updateRenting = function(id,obj)
{
    return new Promise((resolve, reject) =>
    {


        RentingModel.findByIdAndUpdate(id,
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

exports.deleteRenting = function(id)
{
    return new Promise((resolve, reject) =>
    {
        RentingModel.findByIdAndDelete(id, function(err)
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