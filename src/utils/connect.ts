import config from 'config';
import mongoose from 'mongoose';

async function connect(): Promise<void> {
  try {
    await mongoose.connect(config.get<string>('dbUri'));
    console.log('MongoDB Connected!');
  } catch (e: any) {
    console.log(e.message);
  }
}

export default connect;
