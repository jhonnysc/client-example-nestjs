import * as mongoose from 'mongoose';
import config from 'src/config';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () =>
      mongoose.connect(config.database.url, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
  },
];
