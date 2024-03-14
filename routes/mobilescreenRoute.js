const express = require('express');
const mobilescreeenRouter = express.Router();
const mobilescreenController = require('../Controller/mobilescreenController');

mobilescreeenRouter.post('/add', mobilescreenController.addMobileScreen);


module.exports = mobilescreeenRouter;