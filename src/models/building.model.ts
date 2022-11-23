import { model, Schema } from 'mongoose';
import 'mongoose-geojson-schema';
import pointSchema, { IGeoPoint } from './schemas/point.schema';
import polygonSchema, { IGeoPolygon } from './schemas/polygon.schema';

export interface IBuilding {
  position: IGeoPoint;
  area: number;
  confidence: number;
  shape: IGeoPolygon;
  plusCode: String;
}

const buildingSchema = new Schema<IBuilding>({
  position: pointSchema,
  area: Number,
  confidence: Number,
  shape: polygonSchema,
  plusCode: String,
});

buildingSchema.index({ position: '2dsphere' });

const Building = model<IBuilding>('Building', buildingSchema);
export default Building;
