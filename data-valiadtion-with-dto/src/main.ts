import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    // By adding this validation pipe globally, nest js helps us to validate body params, query param etc..
    new ValidationPipe({
      whitelist: true, // When Whitelist is set to true, You will not be allowed to send additional props apart from DTO Property
    }),
  );
  await app.listen(3000);
}
bootstrap();
