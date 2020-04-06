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
    type: {
        type: Number,
        required: true
    },
    valetParking: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    diningAvailable: {
        type: Boolean,
        required: true
    },
    roomsAvailable: {
        type: Boolean,
        required: true
    },
    taxiServices: {
        type: Boolean,
        required: true
    }

})

const Hotel = mongoose.model('Hotel', HotelSchema)

module.exports = Hotel