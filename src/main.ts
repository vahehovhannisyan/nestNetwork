import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {sequelize} from '../models'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }))
  await app.listen(5000, async () => {
    //await sequelize.sync({ force: true });
  });
}
bootstrap();
