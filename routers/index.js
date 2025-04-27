const {Router} = require('express');
const phoneRouter = require('./phoneRouter');
const markRouter = require('./markRouter');


const router = Router();

router.use('/phones',phoneRouter);
router.use('/marks',markRouter);

module.exports = router;