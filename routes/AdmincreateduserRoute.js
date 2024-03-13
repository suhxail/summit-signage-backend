const express = require('express');
const AdminRoutes = express.Router();
const AdmincreateduserController = require('../Controller/AdmincreateduserController');


AdminRoutes.post('/add-member',AdmincreateduserController.admin);
AdminRoutes.get('/get-member',AdmincreateduserController.getMember);
AdminRoutes.put('/update-member/:id',AdmincreateduserController.updateMember);
AdminRoutes.delete('/delete-member/:id',AdmincreateduserController.deleteMember);
module.exports = AdminRoutes;