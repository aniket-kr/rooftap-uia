import { Schema } from 'mongoose';

export interface IGeoPolygon {
  type: 'Polygon';
  coordinates: number[][][];
}

const polygonSchema = new Schema<IGeoPolygon>({
  type: {
    type: String,
    enum: ['Polygon'],
    required: true,
  },
  coordinates: {
    type: [[[Number]]],
    required: true,
  },
});
export default polygonSchema;
