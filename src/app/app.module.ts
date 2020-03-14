import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/modules/database/database.module';
import { ClientsModule } from 'src/modules/clients/clients.module';

@Module({
  imports: [DatabaseModule, ClientsModule],
})
export class AppModule {}
