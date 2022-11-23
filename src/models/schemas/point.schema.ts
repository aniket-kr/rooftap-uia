import { Schema } from 'mongoose';

export interface IGeoPoint {
  type: 'Point';
  coordinates: number[];
}

const pointSchema = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});
export default pointSchema;
