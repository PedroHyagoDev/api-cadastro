import { Injectable } from '@nestjs/common';//importa o decorador Injectable do NestJS para marcar a classe como um provedor de serviço
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IClientesRepository } from '../domain/clientes.repository.interface';
import { Cliente } from '../domain/cliente.entity';
import { ClienteDocument, ClienteModel } from './cliente.schema';

@Injectable()
export class ClientesRepository implements IClientesRepository {
  constructor(
    @InjectModel(ClienteModel.name)
    private model: Model<ClienteDocument>,
) {}

    findAll(): Promise<Cliente[]> { 
    return this.model.find().exec()as any;
    }

    findById(id: string): Promise<Cliente | null> {
    return this.model.findById(id).exec() as any;
    }

    findByName(nome: string): Promise<Cliente[]> { 
      return this.model.find({ nome: new RegExp(nome, 'i') }).exec() as any;
    }
    findByEmail(email: string): Promise<Cliente | null> { 
      return this.model.findOne({ email }).exec() as any; 
    }

    create(data: Partial<Cliente>): Promise<Cliente> {
      const createdCliente = new this.model(data);
      return createdCliente.save() as any;
    }

    async update(id: string, data: Partial<Cliente>): Promise<Cliente | null> {
      const updatedCliente = await this.model.findByIdAndUpdate(id, data, { new: true }).exec() as any;
      return updatedCliente;
    }
    async delete(id: string): Promise<void> {
      await this.model.findByIdAndDelete(id).exec(); 
    }
}