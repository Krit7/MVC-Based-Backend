const mongoose = require('mongoose')
const Hotel = require('../models/hotel')

SeedDB = (req, res) => {
    const hotel = new Hotel({
        name: "Le Meridian",
        address: 'New Delhi, India',
        type: 5,
        valetParking: true,
        description: 'One of the finest hotel in the New Delhi',
        diningAvailable: false,
        roomsAvailable: false,
        taxiServices: true
    });
    Hotel.remove({},(err, removedhotel) => {
        if (err) {
            console.log(err)
        } else {
            console.log({
                success: true,
                message: 'Hotel removed successfully',
                Hotel: removedhotel,
            })
        }
    })
    Hotel.create(hotel, (err, addedhotel) => {
        if (err) {
            console.log(err)
        } else {
            console.log({
                success: true,
                message: 'Hotel created and added successfully',
                Hotel: addedhotel,
            })
            res.send(addedhotel)
        }
    })
}

getHotel = (req, res) => {
    Hotel.find({}, (err, gethotel) => {
        if (err) {
            console.log(err)
        } else {
            res.send(gethotel)
        }
    })
}


module.exports = {
    SeedDB,
    getHotel
}