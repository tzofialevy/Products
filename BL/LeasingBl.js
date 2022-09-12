
const LeasingModel=require("../Models/LeasingModel")


exports.getAllLeasing = function()
{
    return new Promise((resolve, reject) =>
    {
        LeasingModel.find({}, function(err, data)
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

exports.getLeasingByID = function(id)
{
    return new Promise((resolve, reject) =>
    {
        LeasingModel.findById(id, function(err, data)
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

exports.createLeasing = function(obj)
{
    return new Promise((resolve, reject) =>
    {

        let leasing=new LeasingModel({
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
        leasing.save(function(err)
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

exports.updateLeasing = function(id,obj)
{
    return new Promise((resolve, reject) =>
    {


            LeasingModel.findByIdAndUpdate(id,
            { "name":obj.name,
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

exports.deleteLeasing = function(id)
{
    return new Promise((resolve, reject) =>
    {
        LeasingModel.findByIdAndDelete(id, function(err)
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