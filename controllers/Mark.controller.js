const {Phone,Mark} = require('../models');
const { Op,where, fn, literal } = require('sequelize');

module.exports.createMark = async(req,res,next) =>{
    try {
        const {body} = req;

        const createdMark = await Mark.create(body);
        if(!createdMark){
            return res.status(400).send('Error create');
        }

        return res.status(200).send(createdMark);
    } catch (error) {
        next(error)
    }
}

module.exports.getPhoneSpecificBrand = async(req,res,next) =>{
    try {
        const {params: {brandId}} = req;

        const findBrand = await Mark.findByPk(brandId,{
            include: [{
              model: Phone
            }]
          });
        
        // const allPhoneBrands = await findBrand.getPhones();

        return res.status(200).send(findBrand);
        


    } catch (error) {
        next(error)
    }
}