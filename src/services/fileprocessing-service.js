const StatusCode=require('http-status-codes');
const {ServerConfig}=require('../config')
const path=require('path');
const fs=require('fs');

const Apperror=require('../utils/error/App-error');
const ffmpeg=require('../config/ffmpeg-config');
const {fileNameHelper}=require('../utils/helpers');
const { addListener } = require('process');

const outputDirectory = path.join(__dirname, '..', 'processedFiles'); 


 function convertFile(filePath,originalName,fileType){
    try{
    const inputFile=ServerConfig.inputFilePrefix+filePath;
    const outputFileName=fileNameHelper.createUniqueFileName(originalName,fileType);
    const outputFilePath = path.join(outputDirectory,outputFileName);
    return new Promise((res,rej)=>{
        ffmpeg()
        .input(inputFile)
        .on('error',(err)=>{
            fs.unlinkSync(filePath);
            rej(new Apperror("unable to process the file",StatusCode.BAD_REQUEST));
    
        })
        .on('end',()=>{
            fs.unlinkSync(filePath);
            res(outputFilePath);
        })
        .saveToFile(outputFilePath)
    })
} 
catch(error){
   fs.unlinkSync(filePath);
   throw new Apperror("serverside problem",StatusCode.INTERNAL_SERVER_ERROR);
}
   
}


function reSizeFile(filePath,originalName,width,height){
    const outputDirectory = path.join(__dirname, '..', 'processedFiles'); 
    try{
    const inputFile=ServerConfig.inputFilePrefix+filePath;
    const outputFileName=fileNameHelper.updateFileName(originalName);
    const outputFilePath = path.join(outputDirectory,outputFileName);
    return new Promise((res,rej)=>{
        ffmpeg()
        .input(inputFile)
        .size(`${width}x${height}`)
        .output(outputFilePath)
        .on('error',(err)=>{
            fs.unlinkSync(filePath);
            rej(new Apperror("unable to process the file",StatusCode.BAD_REQUEST));
    
        })
        .on('end',()=>{
            fs.unlinkSync(filePath);
            res(outputFilePath);
        })
        .run()
    })
} 
catch(error){
   fs.unlinkSync(filePath);
   throw new Apperror("serverside problem",StatusCode.INTERNAL_SERVER_ERROR);
}
   
}


function addFilter(filePath,originalName,filters){
    const outputDirectory = path.join(__dirname, '..', 'processedFiles'); 
    try{
    const inputFile=ServerConfig.inputFilePrefix+filePath;
    const outputFileName=fileNameHelper.updateFileName(originalName);
    const outputFilePath = path.join(outputDirectory,outputFileName);
    return new Promise((res,rej)=>{
        ffmpeg()
        .input(inputFile)
        .output(outputFilePath)
        .videoFilters(filters)
        .on('error',(err)=>{
            fs.unlinkSync(filePath);
            rej(new Apperror("unable to process the file",StatusCode.BAD_REQUEST));
    
        })
        .on('end',()=>{
            fs.unlinkSync(filePath);
            res(outputFilePath);
        })
        .run()
    })
} 
catch(error){
   fs.unlinkSync(filePath);
   throw new Apperror("serverside problem",StatusCode.INTERNAL_SERVER_ERROR);
}
   
}



module.exports={
   convertFile,
   reSizeFile,
   addFilter

}