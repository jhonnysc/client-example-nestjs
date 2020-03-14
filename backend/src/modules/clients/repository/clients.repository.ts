import { Inject } from '@nestjs/common';
import { Model, Schema } from 'mongoose';
import { Client } from '../model/interfaces/client.interface';
import { CreateClientDTO } from '../dto';

export class ClientRepository {
  constructor(
    @Inject('CLIENT_MODEL')
    private readonly clientModel: Model<Client>,
  ) {}

  async create(poyload: CreateClientDTO) {
    return this.clientModel.create(poyload);
  }

  async updateOne(client_id: Schema.Types.ObjectId, payload: object) {
    return this.clientModel.updateOne(client_id, payload);
  }

  async deleteOne(client_id: Schema.Types.ObjectId) {
    return this.clientModel.deleteOne(client_id);
  }

  async findById(client_id: Schema.Types.ObjectId) {
    return this.clientModel.findById(client_id);
  }

  async findOne(payload: object) {
    return this.clientModel.findOne(payload);
  }
}
