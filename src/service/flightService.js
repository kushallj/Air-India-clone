const flight = require('../models/flight')

const createFlight = async(data) => {
    try{
      const newFlight = {
        departureAirport : data.departureAirport,
        arrivalAirport : data.arrivalAirport,
        duration : data.duration,
        flightDate: data.flightDate,
        departureTime: data.departureTime,
        arrivalTime: data.arrivalTime,
        flightNumber: data.flightNumber,
        price: data.price,
        airline: data.airlineId
      }
      const response = await new Flight(newFlight).save();
      return response; 
    }catch(err){
        console.log(err);
    }
}

const updateFlight = async(data) => {
    try{
        const response = await flight.updateOne({flightNumber:data.flightNumber},data)
        return response

    }catch(err){
        console.log(err);
    }

}

const destroyFlight = async(flightNumber) => {
    try{
        const response = await flight.findOneAndDelete({flightNumber:flightNumber})
        return response

    }catch(err){
        console.log(err);
    }

}

const getFlight = async(flightNumber) => {
    try{
        const response = await flight.findOne({flightNumber:flightNumber})
        return response

    }catch(err){
        console.log(err);
    }

}

const getAllFlight = async() => {
    try{
        const response = await flight.find()
        return response

    }catch(err){
        console.log(err);
    }

}

module.exports = {
    createFlight,
    updateFlight,
    destroyFlight,
    getFlight,
    getAllFlight
}