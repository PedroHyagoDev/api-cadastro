import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('API de Cadastro de Clientes')
    .setDescription('API REST para gerenciamento de clientes')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  const connection = app.get<Connection>(getConnectionToken());
  try {
    await connection.db!.collection('clientemodels').dropIndex('phone_1');
    console.log('Índice phone_1 removido com sucesso');
  } catch (e) {
    console.log('Erro ao remover índice:', e.message);
  }

  console.log('Servidor rodando em http://localhost:3000');
  console.log('Swagger em http://localhost:3000/api');
}
bootstrap();