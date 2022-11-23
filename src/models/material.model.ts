import { model, Schema } from 'mongoose';

export interface IMaterial {
  name: String;
  heatTransferCoeff: number;
}

const materialSchema = new Schema<IMaterial>({
  name: String,
  heatTransferCoeff: Number,
});

const Material = model<IMaterial>('Material', materialSchema);
export default Material;
