import { model, Schema } from 'mongoose';

export interface IPaint {
  name: string;
  alpha: number;
}

const paintSchema = new Schema<IPaint>({
  name: String,
  alpha: Number,
});

const Paint = model<IPaint>('Paint', paintSchema);
export default Paint;
