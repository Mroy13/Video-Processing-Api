const express=require('express');
const {filehandlingController}=require ('../../controllers');
const {filehandlingMiddleware}=require('../../middlewares');
const router=express.Router();

router.post('/convert',filehandlingMiddleware.uploadFile,filehandlingController.convertFile);
router.post('/resize',filehandlingMiddleware.uploadFile,filehandlingController.reSizeFile);
router.post('/addFilter',filehandlingMiddleware.uploadFile,filehandlingController.addFilter);
module.exports=router