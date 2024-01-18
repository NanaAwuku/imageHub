// models/imageModel.ts

import mongoose, { Document, Schema } from 'mongoose';

export interface IImage extends Document {
  data: Buffer;
  contentType: string;
}

const imageSchema = new Schema({
  data: Buffer,
  contentType: String,
});

const Image = mongoose.model<IImage>('Image', imageSchema);

export default Image;
