
---

# Video Processing API

A RESTful API for processing video files using Node.js, Express, Sequelize, FFmpeg, and fluent-ffmpeg. This API allows users to upload video files, change their formats, resize them, and add filters.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js to build APIs.
- **Sequelize**: Promise-based Node.js ORM for SQL databases.
- **FFmpeg**: A powerful multimedia framework for handling video, audio, and other multimedia files and streams.
- **fluent-ffmpeg**: A Node.js library for working with FFmpeg easily.

## Features

1. **Upload File & Change Format**: Upload a video file and change its format.
2. **Resize Video File**: Resize the video to a specified resolution.
3. **Add Filters**: Apply various filters to the video, such as fade effects and padding.

## Setup Guide

### Prerequisites

1. **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
2. **FFmpeg**: Ensure FFmpeg is installed on your system. You can download it from [ffmpeg.org](https://ffmpeg.org/download.html).

### Project Setup

1. **Clone the Repository**:
   Download this template from GitHub and open it in your favorite text editor.

   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. **Install Dependencies**:
   Inside the folder path, execute the following command:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   In the root directory, create a `.env` file and add the following environment variables:

   ```
   PORT=<port number of your choice>
   FfprobePath='give path of ffprobe'
   FfmpegPath='path of ffmpeg'
   inputFilePrefix='path of uploadFile folder'
   ```

   **Example**:
   ```
   PORT=3000
   FfprobePath='C:/path/to/ffprobe.exe'
   FfmpegPath='C:/path/to/ffmpeg.exe'
   inputFilePrefix='C:/path/to/uploadFiles/'
   ```

4. **Database Configuration**:
   For future implementation involving a database, although it is not used in the current version, you can set it up if desired.

   Run the following command inside the `src` directory to generate `config.json`:

   ```bash
   npx sequelize init:config
   ```

   Provide the MySQL username, password, and database name inside the generated `config.json`.

## API Endpoints

### API Test

- **Info Endpoint**:
  - **GET**: `http://localhost:3000/api/v1/info`
  - Returns general information about the API.

### File Processing Endpoints

1. **Convert File**:
   - **Endpoint**: `http://localhost:3000/api/v1/processFile/convert?fileType=mp4`
   - Converts the uploaded video file to the specified format.

2. **Resize Video**:
   - **Endpoint**: `http://localhost:3000/api/v1/processFile/resize?width=300&height=500`
   - Resizes the uploaded video file to the specified width and height.

3. **Add Filter**:
   - **Endpoint**: `http://localhost:3000/api/v1/processFile/addFilter?fadeStart=10&fadeDuration=30&padWidth=800&padHeight=500&xPos=30&yPos=60&color=violet`
   - Adds specified filters to the uploaded video file.

### Postman Documentation

You can also check the Postman documentation for detailed endpoint information:
- **Postman Documentation Link**: [https://documenter.getpostman.com/view/28392756/2sAXxJjFdN]

---

Feel free to modify any section according to your specific project requirements. This README provides a clear overview of the project, its setup instructions, and details about the API endpoints.