const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    PORT: process.env.PORT,
    FfmpegPath:process.env.FfmpegPath,
    FfprobePath:process.env.FfprobePath,
    inputFilePrefix:process.env.inputFilePrefix
}