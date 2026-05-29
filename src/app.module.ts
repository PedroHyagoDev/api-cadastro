import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // ← lê o .env
    MongooseModule.forRoot(process.env.MONGODB_URI as string), // ← conecta ao MongoDB usando a URI do .env
    ClientesModule,
  ],
})
export class AppModule {}