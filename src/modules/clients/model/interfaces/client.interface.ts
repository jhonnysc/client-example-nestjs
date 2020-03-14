import { Document } from 'mongoose';

export interface Client extends Document {
  name: string;
  document: string;
  company: string;
  trading_name: string;
  country_code: string;
  area_code: string;
  phone: string;
  email: string;
  address: {
    street: string;
    number: string;
    address_type: string;
    zip_code: string;
    reference: string;
    address_details: string;
  };
  created_at: Date;
  updated_at: Date;
}
