import { Cliente } from './cliente.entity';

export interface IClientesRepository {
  findAll(): Promise<Cliente[]>; 
  findById(id: string): Promise<Cliente | null>; 
  findByName(nome: string): Promise<Cliente[]>; 
  findByEmail(email: string): Promise<Cliente | null>; 
  create(data: Partial<Cliente>): Promise<Cliente>; 
  update(id: string, data: Partial<Cliente>): Promise<Cliente | null>; 
  delete(id: string): Promise<void>; 
}