const express = require('express');
const screenRouter = express.Router();
const screenController = require('../Controller/screenController');
const authMiddleware = require('../Middlewear/Authenticated')

screenRouter.post('/screen',authMiddleware, screenController.addscreen)
screenRouter.get('/get/screen',authMiddleware, screenController.getscreen);
screenRouter.put('/update-screen/:id', screenController.updateScreen);
screenRouter.get('/particularget-screen/:id', screenController.Particularscreen );
screenRouter.delete('/delete-screen/:id', screenController.deleteScreen);
// screenRouter.get('/get-admin',authMiddleware,screenController.getAdminormember);

module.exports = screenRouter;
