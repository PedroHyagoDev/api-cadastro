import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import {ClientesRepository} from './infra/clientes.repository';
import { ClienteModel, ClienteSchema } from './infra/cliente.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: ClienteModel.name, schema: ClienteSchema }]), 
  ],
  controllers: [ClientesController],
  providers: [
    ClientesService,
    {
      provide: 'CLIENTES_REPOSITORY', 
      useClass: ClientesRepository, 
    },
  ],
})
export class ClientesModule {}  
