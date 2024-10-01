const express=require('express');
const {filehandlingController}=require ('../../controllers');
const {filehandlingMiddleware}=require('../../middlewares');
const router=express.Router();

router.post('/convert',filehandlingMiddleware.uploadFile,filehandlingController.convertFile);
module.exports=router