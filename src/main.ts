import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: '*', // Allow all origins
  //   methods: 'GET,POST,PUT,DELETE,OPTIONS',
  //   credentials: true, // Optional, for cookies or auth headers
  // });
  app.enableCors();
  await app.listen(process.env.PORT ?? 5555);
}
bootstrap();
