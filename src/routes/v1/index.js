const express=require('express');
const { infoController} = require('../../controllers');
const Routes=require('./fileprocessing-routes');
const router=express.Router();
router.use('/processFile',Routes);
router.get('/info',infoController.info);
module.exports=router;
