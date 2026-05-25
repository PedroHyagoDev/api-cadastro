import { Injectable, NotFoundException, ConflictException, Inject } from '@nestjs/common';
import type { IClientesRepository } from './domain/clientes.repository.interface';
import type { CreateClienteDto } from './dto/create-cliente.dto';
import type { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @Inject('CLIENTES_REPOSITORY')
    private readonly repo: IClientesRepository,
  ) {}// Injeção de dependência do repositório
  create(createClienteDto: CreateClienteDto) {
    return this.repo.create(createClienteDto);// Cria um novo cliente usando o repositório
  }
    findAll() {
    return this.repo.findAll();// Retorna todos os clientes usando o repositório
  }
    findOne(id: string) {
    return this.repo.findById(id);// Retorna um cliente específico por ID usando o repositório
    }
    findByName(nome: string) {
    return this.repo.findByName(nome);// Retorna clientes que correspondem ao nome usando o repositório
    }
    findByEmail(email: string) {
    return this.repo.findByEmail(email);  // Retorna um cliente específico por email usando o repositório
    }
    async update(id: string, updateClienteDto: UpdateClienteDto) {  
    const existingCliente = await this.repo.findById(id); // Verifica se o cliente existe antes de atualizar
    if (!existingCliente) {
      throw new NotFoundException(`Cliente with id ${id} not found`);// Lança uma exceção se o cliente não for encontrado
    }
    if (updateClienteDto.email) {
      const emailOwner = await this.repo.findByEmail(updateClienteDto.email); // Verifica se o email já está em uso por outro cliente
        if (emailOwner && emailOwner.id !== id) {
            throw new ConflictException(`Email ${updateClienteDto.email} is already in use`); // Lança uma exceção se o email já estiver em uso por outro cliente
        }
    }
    return this.repo.update(id, updateClienteDto);// Atualiza o cliente usando o repositório e retorna o cliente atualizado
    }
    async remove(id: string) {
    const existingCliente = await this.repo.findById(id);// Verifica se o cliente existe antes de tentar remover
    if (!existingCliente) {
      throw new NotFoundException(`Cliente with id ${id} not found`);// Lança uma exceção se o cliente não for encontrado
    }
    return this.repo.delete(id);// Remove o cliente usando o repositório
    }
}