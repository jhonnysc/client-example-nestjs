import { Schema } from 'mongoose';
import mongooseTypes from 'src/utils/schema.types';
import { Client } from '../interfaces/client.interface';
import { encrypt, decrypt } from 'src/utils/secutiry';

export const ClientSchema = new Schema(
  {
    name: mongooseTypes.required.string,
    document: mongooseTypes.required.string,
    company: mongooseTypes.required.string,
    trading_name: mongooseTypes.required.string,
    country_code: mongooseTypes.required.string,
    area_code: mongooseTypes.required.string,
    phone: mongooseTypes.required.string,
    email: mongooseTypes.required.string,
    address: {
      type: {
        street: mongooseTypes.required.string,
        number: mongooseTypes.required.string,
        address_type: {
          type: String,
          enum: ['RESIDENCIAL', 'COMERCIAL'],
          required: true,
        },
        zip_code: mongooseTypes.required.string,
        reference: mongooseTypes.required.string,
        address_details: mongooseTypes.required.string,
      },
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

ClientSchema.pre<Client>('save', function(next) {
  this.email = encrypt(this.email);
  next();
});
