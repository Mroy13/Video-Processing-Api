const ffmpeg = require('fluent-ffmpeg');
const {ServerConfig}=require('./index');
ffmpeg.setFfprobePath(ServerConfig.FfprobePath);
ffmpeg.setFfmpegPath(ServerConfig.FfmpegPath);

module.exports=ffmpeg;