const { StatusCodes } = require('http-status-codes');
const ffmpeg=require('../config/ffmpeg-config');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const upload=require('../config/multer-config');

function uploadFile(req,res,next){
    
    upload.single('file')(req,res,(err)=>{
         if(err){
             res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
         }
      
            ffmpeg.ffprobe(req.file.path, (err, metadata) => {
            if (err) {
              ErrorResponse.message="unable to retrieve metaData"
              res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
            }
            
            if(metadata.format.duration>1000){
                ErrorResponse.message=`Error: Video duration is ${metadata.format.duration} s, exceeding the 1000s limit`;
                res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
            }
            next();
        
          });

         
         
    });
     
}
module.exports={
    uploadFile
}