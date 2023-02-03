const Airline = require('../models/flight')

const createAirline = async(data) => {
    try{
      const newAirline = {
        name: data.name
      }
      const response = await new Airline(newAirline).save();
      return response; 
    }catch(err){
        console.log(err);
    }
}



const destroyAirline = async(name) => {
    try{
        const response = await flight.findOneAndDelete({name:name})
        return response

    }catch(err){
        console.log(err);
    }

}

const getAirline = async(name) => {
    try{
        const response = await flight.findOne({name:name})
        return response

    }catch(err){
        console.log(err);
    }

}

const getAllAirline = async() => {
    try{
        const response = await flight.find()
        return response

    }catch(err){
        console.log(err);
    }

}

module.exports = {
    createAirline,
    
    destroyAirline,
    getAirline,
    getAllAirline
}