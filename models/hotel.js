const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    star: {
        type: Number,
        required: true
    },
    valetParking: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    diningAvailable: {
        type: String,
        required: true
    },
    roomsAvailable: {
        type: String,
        required: true
    },
    taxiServices: {
        type: String,
        required: true
    }

})

const Hotel = mongoose.model('Hotel', HotelSchema)

module.exports = Hotel