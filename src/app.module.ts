import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ClientesModule } from './clientes/clientes.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
  useFactory: (config: ConfigService) => ({
    uri: config.get<string>('MONGO_URI'),
     autoIndex: false,
  }),
  inject: [ConfigService],
}),
        ConfigModule.forRoot({
          isGlobal: true,
        }),
    ClientesModule,
  ],
})
export class AppModule {}