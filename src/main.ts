import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import config from './config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');
  await app.listen(config.port);
}
bootstrap();
