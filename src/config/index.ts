import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT,
  database: {
    url: process.env.MONGO_URL,
  },
  encryption: {
    key: process.env.ENCRYPTION_KEY,
    iv: process.env.ENCRYPTION_IV,
  },
};

export default config;
