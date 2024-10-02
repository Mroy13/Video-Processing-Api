const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { fileprocessingService } = require('../services');
const fs = require('fs');
async function convertFile(req, res) {
    const fileType = req.query.fileType;
    try {
        const result = await fileprocessingService.convertFile(req.file.path, req.file.originalname, fileType);

        res.download(result, (err) => {
            if (err) {
                return res
                    .status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({
                        message: 'download failed',
                        error: err.message,
                    });
            }
            else {
                fs.unlinkSync(result);
            }
        });

    }
    catch (error) {
        ErrorResponse.message = error.message;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }

}

async function reSizeFile(req,res){
    const width=req.query.width;
    const height=req.query.height;
    
    try {
        const result = await fileprocessingService.reSizeFile(req.file.path, req.file.originalname, width, height);

        res.download(result, (err) => {
            if (err) {
                return res
                    .status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({
                        message: 'download failed',
                        error: err.message,
                    });
            }
            else {
                fs.unlinkSync(result);
            }
        });

    }
    catch (error) {
        ErrorResponse.message = error.message;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    convertFile,
    reSizeFile

}