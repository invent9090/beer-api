import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('DrinkHub ECommerce API')
  .setDescription('Official documentation about DrinkHub Ecommerce API.')
  .setVersion('1.0')
  .addTag('ECommerce')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);


  app.enableCors();
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
