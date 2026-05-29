import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:admin@ac-muw4axi-shard-00-00.xqktun5.mongodb.net:27017,ac-muw4axi-shard-00-01.xqktun5.mongodb.net:27017,ac-muw4axi-shard-00-02.xqktun5.mongodb.net:27017/cadastro?ssl=true&replicaSet=atlas-psmkbq-shard-0&authSource=admin&appName=Cluster0'),
    ClientesModule,
  ],
})
export class AppModule {}
