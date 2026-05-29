import { Cliente } from './cliente.entity';

export interface IClientesRepository {
  findAll(): Promise<Cliente[]>; //procura clientes
  findById(id: string): Promise<Cliente | null>; //procura cliente por id
  findByName(nome: string): Promise<Cliente[]>; //procura cliente por nome
  findByEmail(email: string): Promise<Cliente | null>; //procura cliente por email
  create(data: Partial<Cliente>): Promise<Cliente>; //cria novo cliente
  update(id: string, data: Partial<Cliente>): Promise<Cliente | null>; //atualiza cliente
  delete(id: string): Promise<void>; //deleta cliente
}