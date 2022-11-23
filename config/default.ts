import 'dotenv/config';

export default {
  serverPort: 8080,
  dbUri: 'mongodb://127.0.0.1:27017/rooftap',
  mapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
} as const;
