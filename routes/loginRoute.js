const express = require('express');
const loginRouter = express.Router();
const loginController = require('../Controller/loginController');


// loginRouter.post('/createUser', loginController.createUser);
loginRouter.post('/login',loginController.login)

module.exports = loginRouter;
