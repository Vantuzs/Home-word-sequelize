const {Router} = require('express');
const phoneRouter = require('./phoneRouter');


const router = Router();

router.use('/phones',phoneRouter);

module.exports = router;