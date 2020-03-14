import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ClientsService } from './service/clients.service';
import { ClientRepository } from './repository/clients.repository';
import { clientProviders } from './model/providers/client.providers';
import { ClientsController } from './controller/clients.controller';

@Module({
  imports: [DatabaseModule],
  providers: [ClientsService, ClientRepository, ...clientProviders],
  controllers: [ClientsController],
  exports: [ClientsService, ClientRepository, ...clientProviders],
})
export class ClientsModule {}
