const express = require('express');
const templateRouter = express.Router();
const templateController = require('../Controller/templateController');

templateRouter.post('/add', templateController.addTemplate);
templateRouter.get('/get-template', templateController.getTemplate);

module.exports = templateRouter;