const { homeController } = require('../controllers/homeController');
const { Router } = require('express');

const homeRouter = Router();

homeRouter.get('/', homeController);

module.exports = { homeRouter };