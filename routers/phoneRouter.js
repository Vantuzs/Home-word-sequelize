const {Router} =require('express');
const PhoneController = require('../controllers/Phone.controller');
const { getPhoneInstance } = require('../middleware/phone.mv');

const phoneRouter = Router();

// POST http://localhost:5000/api/phones HTTP/1.1
phoneRouter.post('/',PhoneController.createPhone);
phoneRouter.get('/',PhoneController.findAll);
phoneRouter.get('/old',PhoneController.findPhoneOld2020);
phoneRouter.put('/nfs/:year',PhoneController.AddNfsAllPhonesByRealizeDate)
phoneRouter.get('/:year',PhoneController.findToYearRealise);
phoneRouter.put('/:phoneId',PhoneController.updateDataToRAM);
phoneRouter.delete('/dellBy/:year',PhoneController.deletePhoneByRealizeDate);
phoneRouter.delete('/:phoneId',getPhoneInstance,PhoneController.deletePhone)

module.exports = phoneRouter;