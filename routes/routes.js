const express = require('express');
const controllers = require('../controllers/controller');
const app = express();

const router = express.Router();

router.get('/', controllers.SeedDB);

router.get('/gethotel', controllers.getHotel);

module.exports = router