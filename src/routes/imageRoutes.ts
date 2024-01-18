// routes/imageRoutes.ts

import express from 'express';
import { processImageUpload } from '../controllers/uploadController';
import { getImage } from '../controllers/imageController';

const router = express.Router();

router.post('/upload', processImageUpload);
router.get('/get_image/:id', getImage);

export default router;
