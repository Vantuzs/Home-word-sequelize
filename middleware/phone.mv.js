const {Phone} = require('../models')

module.exports.getPhoneInstance = async(req,res,next) =>{
    try {
        const {params: {phoneId}} = req;

        const findPhone = await Phone.findByPk(phoneId)
        if(!findPhone){
            return res.status(404).send('Phone not found =(')
        }

        req.phoneInstance = findPhone
        next()
    } catch (error) {// dsa
        next(error)
    }
}