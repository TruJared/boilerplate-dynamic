const express = require('express');

const router = express.Router();
const demoController = require('../controllers/demoController');

// use higher order function -> keeps from using try catch on async calls
// just wrap this around the controller call
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', demoController.homePage);

module.exports = router;
