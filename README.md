# Image / File Upload API

This project is a simple Express.js API for handling image uploads and retrievals. It utilizes MongoDB to store the uploaded images and implements proper error handling.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Features

- Image upload endpoint with file type validation.
- Image retrieval endpoint providing a secure URL.
- MongoDB integration to store uploaded images.
- Error handling for various scenarios.

## Prerequisites

- Node.js and npm installed.
- MongoDB server running locally or accessible.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NanaAwuku/imageHub.git

   ```

2. **Install Dependecies:**
   cd required folder
   npm install

3. **Set up environment variables:**
   SERVER_PORT=8000
   MONGO_URI=mongodb://localhost:27017/imageUpload

4. **Start the server**
    npm start



API Endpoints
1. **Upload Image**
      Endpoint: POST /api/upload
      Request Body:
      Key: image (Form-data)
      Value: Image file (JPEG, PNG, GIF)
      Response (Success):
            {
              "message": "Image uploaded successfully"
            }
2. **Get Image**
        Endpoint: GET /api/get_image/:id
        Response (Success):
        {
          "imageUrl": "/api/get_image/:id"
        }

USAGE

      Use Postman or a similar tool to test the API endpoints.
      Follow the provided API Endpoints documentation for request and response details.


Error Handling

      The API handles various error scenarios and provides informative error messages.
      If you encounter issues, check the error messages in the response to identify the problem.

Contributing

    Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

