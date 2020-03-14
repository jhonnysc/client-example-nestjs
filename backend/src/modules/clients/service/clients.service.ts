import { Injectable, HttpException } from '@nestjs/common';
import { ClientRepository } from '../repository/clients.repository';
import { CreateClientDTO, CreateClientResponseDTO } from '../dto';
import { Client } from '../model/interfaces/client.interface';
import { decrypt, encrypt } from 'src/utils/secutiry';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ClientsService {
  constructor(private readonly clientsRepository: ClientRepository) {}

  async create(client_dto: CreateClientDTO): Promise<CreateClientResponseDTO> {
    await this.findByEmail(client_dto.email);
    const client = await this.clientsRepository.create(client_dto);
    client.email = decrypt(client.email);
    return plainToClass(CreateClientResponseDTO, client);
  }

  async findByEmail(email: string): Promise<Client> {
    const client = await this.clientsRepository.findOne({
      email: encrypt(email),
    });

    if (client)
      throw new HttpException('Cliente com este email ja existe', 422);
    return client;
  }
}
