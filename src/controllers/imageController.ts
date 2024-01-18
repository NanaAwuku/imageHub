// controllers/imageController.ts

import { Request, Response } from 'express';
import Image from '../models/imageModel';

export const getImage = async (req: Request, res: Response) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }

    // Construct secure URL for the image
    const imageUrl = `/get_image/${req.params.id}`;

    res.json({ imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
