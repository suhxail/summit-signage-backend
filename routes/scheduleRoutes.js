const express = require('express');
const scheduleRouter = express.Router();
const scheduleController = require('../Controller/scheduleController');

scheduleRouter.post('/add-schedule',scheduleController.addSchedule);
scheduleRouter.get('/get-schedule',scheduleController.getSchedule);
scheduleRouter.put('/update-schedule/:id',scheduleController.updateSchedule);
scheduleRouter.get('/particular-schedule/:id',scheduleController.particularSchedule);
scheduleRouter.delete('/delete-schedule/:id',scheduleController.deleteSchedule);


module.exports=scheduleRouter;