import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require("dotenv").config();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //enable cors only for our client
  app.enableCors({ origin:['https://ampedxmusic.io', 'http://localhost:3000'] })
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
