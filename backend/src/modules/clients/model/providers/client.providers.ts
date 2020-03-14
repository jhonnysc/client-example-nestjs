import { Connection } from 'mongoose';
import { ClientSchema } from '../schemas/client.schema';

export const clientProviders = [
  {
    provide: 'CLIENT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('clients', ClientSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
