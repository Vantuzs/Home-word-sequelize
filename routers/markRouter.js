const Router = require('express');
const MarkController = require('../controllers/Mark.controller');

const markRouter = Router()

markRouter.post('/',MarkController.createMark);
markRouter.get('/:brandId',MarkController.getPhoneSpecificBrand);

module.exports = markRouter