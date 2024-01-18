// controllers/uploadController.ts

import { Request, Response } from 'express';
import multer from 'multer';
import Image, { IImage } from '../models/imageModel';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const uploadImage = upload.single('image');

export const processImageUpload = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(req.file.mimetype)) {
      return res.status(400).json({ error: 'Invalid file type' });
    }

    // Save image to MongoDB
    const newImage: IImage = new Image({
      data: req.file.buffer,
      contentType: req.file.mimetype,
    });

    await newImage.save();

    // Construct response
    res.json({ message: 'Image uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
