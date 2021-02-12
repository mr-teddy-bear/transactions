import dotenv from 'dotenv';

const DOT_ENV_FILE = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env.local';

dotenv.config({ path: DOT_ENV_FILE });

export default {
  app: {
    environment: process.env.NODE_ENV,
    port: process.env.APP_PORT,
    clientUri: process.env.CLIENT_URI,
    mongoUri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    jwtTimeToLive: process.env.TIME_TO_LIVE
  }
};
