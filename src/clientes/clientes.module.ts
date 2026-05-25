import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import {ClientesRepository} from './infra/clientes.repository';
import { ClienteModel, ClienteSchema } from './infra/cliente.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: ClienteModel.name, schema: ClienteSchema }]), // Configura o módulo Mongoose para usar o esquema do cliente
  ],
  controllers: [ClientesController], // Registra o controlador de clientes
  providers: [
    ClientesService, // Registra o serviço de clientes
    {
      provide: 'CLIENTES_REPOSITORY', // Define um token para injeção de dependência do repositório
      useClass: ClientesRepository, // Especifica a classe concreta a ser usada para o repositório
    },
  ],
})
export class ClientesModule {}  // Define o módulo de clientes, que inclui o controlador, serviço e repositório necessários para gerenciar os clientes
