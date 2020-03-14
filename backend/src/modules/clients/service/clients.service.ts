import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../repository/clients.repository';
import { CreateClientDTO, CreateClientResponseDTO } from '../dto';
import { Client } from '../model/interfaces/client.interface';
import { decrypt } from 'src/utils/secutiry';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ClientsService {
  constructor(private readonly clientsRepository: ClientRepository) {}

  async create(client_dto: CreateClientDTO): Promise<CreateClientResponseDTO> {
    const client = await this.clientsRepository.create(client_dto);
    client.email = decrypt(client.email);
    return plainToClass(CreateClientResponseDTO, client);
  }
}
