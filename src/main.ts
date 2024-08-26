import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv'; config();

const env = process.env

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.PORT || 3000).then(() => { console.log(`http://localhost:${env.PORT || 3000}`) });
}
bootstrap();
