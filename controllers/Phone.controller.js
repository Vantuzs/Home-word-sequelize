const {Phone,Mark} = require('../models');
const { Op,where, fn, literal } = require('sequelize');

module.exports.createPhone = async(req,res,next) =>{
    try {
        const {body} = req;

        const createdUser = await Phone.create(body);
        if(!createdUser){
            return res.status(400).send('Error create');
        }

        return res.status(200).send(createdUser);
    } catch (error) {
        next(error)
    }
}

module.exports.findAll = async(req,res,next) =>{
    try {
        const findAllPhones = await Phone.findAll()

        return res.status(200).send(findAllPhones)
    } catch (error) {
        next(error)
    }
}

// module.exports.findToYearRealise = async(req,res,next) =>{
//     try {
//         const {params: {year}} = req
//         const findAllPhones = await Phone.findAll({
//             where: where(fn('EXTRACT', literal(`YEAR FROM "realize_date"`)), year)
            
//         })
        
//         return res.status(200).send(findAllPhones)
//     } catch (error) {
//         next(error)
//     }
// }

module.exports.findToYearRealise = async(req,res,next) =>{
    try {
        const {params: {year}} = req
        const findAllPhones = await Phone.findAll({
            where: where(fn('EXTRACT', literal(`YEAR FROM "realize_date"`)), year)
            
        })
        
        return res.status(200).send(findAllPhones)
    } catch (error) {
        next(error)
    }
}


module.exports.findPhoneOld2020 = async(req,res,next) =>{
    try {
        const findAllPhones = await Phone.findAll({
            where: {
                realizeDate: {[Op.gt]: new Date('2020-12-31')}
            }
            
        })

        return res.status(200).send(findAllPhones)
    } catch (error) {
        next(error)
    }
}

 
module.exports.updateDataToRAM = async(req,res,next) =>{
    try {
        const {body,params: {phoneId}} = req;

        const updatedPhone = await Phone.update(body,{where: {id:phoneId},returning:true})

        return res.status(200).send(updatedPhone)
    } catch (error) {
        next(error)
    }
}


module.exports.AddNfsAllPhonesByRealizeDate = async(req,res,next) => {
    try {
        const {body,params: {year}} = req;

        const AddNfs = await Phone.update(body,{where:{
            realizeDate: {[Op.between]: [`${year}-01-01`,`${year}-12-31`]}
        },returning:true})

        if(!AddNfs){
            return res.status(404).send('Phone not found =(')
        }

        return res.status(200).send(AddNfs)
    } catch (error) {
        next(error)
    }
}


module.exports.deletePhone = async(req,res,next) =>{
    try {
        const {params: {phoneId},phoneInstance} = req;

        const deletePhone = await Phone.destroy({where: {id:phoneId}});

        if(deletePhone){
            return res.status(200).send(phoneInstance);
        }

        return res.status(404).send('Phone not found =(');
    } catch (error) {
        next(error)
    }
}


module.exports.deletePhoneByRealizeDate = async(req,res,next) =>{
    try {
        const {params: {year}} = req;

        const allPhoneOnDelete = await Phone.findAll({where: { realizeDate: {
            [Op.between]: [`${year}-01-01`,`${year}-12-31`]
        }}})

        const deletePhone = await Phone.destroy({where: { realizeDate: {
            [Op.between]: [`${year}-01-01`,`${year}-12-31`]
        }
    }
});

        if(deletePhone){
            return res.status(200).send(allPhoneOnDelete);
        }

        return res.status(404).send('Phone not found =(');
    } catch (error) {
        next(error)
    }
}

