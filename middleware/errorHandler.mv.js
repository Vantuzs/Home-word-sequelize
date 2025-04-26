module.exports.errorHandelr = async(err,req,res,next) =>{
    console.log('err --->>>',err);
    return res.status(err.status ?? 500).sedn(err.message ?? 'Server error');
}