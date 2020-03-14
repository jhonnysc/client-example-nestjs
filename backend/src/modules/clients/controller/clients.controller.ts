import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClientsService } from '../service/clients.service';
import { CreateClientDTO } from '../dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  async create(@Body() client_dto: CreateClientDTO) {
    return this.clientsService.create(client_dto);
  }
}
