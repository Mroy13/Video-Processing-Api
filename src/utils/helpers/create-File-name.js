const path = require('path');

function createUniqueFileName(originalFileName, fileType) {
    const fileNameWithoutExt = path.parse(originalFileName).name;

    const uniqueFileName = `${fileNameWithoutExt}-${Date.now()}.${fileType}`;

    return uniqueFileName
}

module.exports=createUniqueFileName;