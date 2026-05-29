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
    private model: Model<ClienteDocument>,//injeta o modelo do cliente usando o decorador InjectModel do NestJS para acessar o banco de dados MongoDB e realizar operações de CRUD
) {}
    findAll(): Promise<Cliente[]> { 
    return this.model.find().exec()as any;
    }
    findById(id: string): Promise<Cliente | null> {//procura cliente por id usando o método findById do Mongoose
    return this.model.findById(id).exec() as any;
    } 
    findByName(nome: string): Promise<Cliente[]> { //procura cliente por nome usando o método find do Mongoose com uma expressão regular para busca case-insensitive
      return this.model.find({ nome: new RegExp(nome, 'i') }).exec() as any;//a expressão regular new RegExp(nome, 'i') é usada para criar uma busca case-insensitive pelo nome do cliente, permitindo encontrar clientes mesmo que a capitalização do nome seja diferente. O método find retorna um array de clientes que correspondem ao critério de busca.
    }
    findByEmail(email: string): Promise<Cliente | null> { 
      return this.model.findOne({ email }).exec() as any; //procura cliente por email usando o método findOne do Mongoose, que retorna o primeiro cliente que corresponde ao critério de busca. O critério de busca é um objeto com a propriedade email igual ao valor do parâmetro email passado para a função.
    }
    create(data: Partial<Cliente>): Promise<Cliente> {
      const createdCliente = new this.model(data);
      return createdCliente.save() as any;//cria um novo cliente usando o modelo do Mongoose e salva no banco de dados usando o método save, que retorna o cliente criado com um id gerado automaticamente pelo MongoDB. O parâmetro data é do tipo Partial<Cliente>, o que significa que pode conter apenas algumas das propriedades do cliente, permitindo flexibilidade na criação de novos clientes.
    }
    async update(id: string, data: Partial<Cliente>): Promise<Cliente | null> {
      const updatedCliente = await this.model.findByIdAndUpdate(id, data, { new: true }).exec() as any;
      return updatedCliente;//atualiza um cliente existente usando o método findByIdAndUpdate do Mongoose, que recebe o id do cliente a ser atualizado, os dados a serem atualizados e a opção { new: true } para retornar o cliente atualizado. O método retorna o cliente atualizado ou null se o cliente com o id especificado não for encontrado. O parâmetro data é do tipo Partial<Cliente>, permitindo atualizar apenas algumas das propriedades do cliente.
    }
    async delete(id: string): Promise<void> {
      await this.model.findByIdAndDelete(id).exec(); //deleta um cliente usando o método findByIdAndDelete do Mongoose, que recebe o id do cliente a ser deletado e retorna o cliente deletado ou null se o cliente com o id especificado não for encontrado. A função é assíncrona e retorna void, indicando que a operação de deleção foi concluída.
    }
}