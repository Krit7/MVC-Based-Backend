const express = require('express');
const controllers = require('../controllers/controller');
const app = express();

const router = express.Router();

// INDEX ROUTE
router.get('/', controllers.getHotels);

//ADD NEW HOTEL ROUTES
router.get('/hotel/new', controllers.newHotelPage);

router.post('/hotel/new', controllers.validateInputs, controllers.addHotel);

//GET HOTEL DETAILS ROUTE
router.get('/hotel/:id', controllers.getHotel);

//EDIT HOTEL DETAILS ROUTES
router.get('/edit/:id', controllers.getHotel);

router.post('/edit/:id', controllers.validateInputs, controllers.editHotel);

//DELETE HOTEL ROUTE
router.post('/delete/:id', controllers.deleteHotel);

module.exports = router