import { Injectable, NotFoundException, ConflictException, Inject, InternalServerErrorException } from '@nestjs/common';
import type { IClientesRepository } from './domain/clientes.repository.interface';
import type { CreateClienteDto } from './dto/create-cliente.dto';
import type { UpdateClienteDto } from './dto/update-cliente.dto';


@Injectable()
export class ClientesService {
  constructor(
    @Inject('CLIENTES_REPOSITORY')
    private readonly repo: IClientesRepository,
  ) {}
  async create(createClienteDto: CreateClienteDto) {
  try {
    return await this.repo.create(createClienteDto);
  } catch (erro) {
    throw new InternalServerErrorException('Erro ao cadastrar cliente');
  }
}
    async findAll() {
    try {      return await this.repo.findAll();
    } catch (erro) {      throw new InternalServerErrorException('Erro ao buscar clientes');
    } 
  }
    async findOne(id: string) {
      try {
    return await this.repo.findById(id);
    } catch (erro) {
      throw new InternalServerErrorException('Erro ao buscar cliente');
    }
    }
    async findByName(nome: string) {
      try {
    return await this.repo.findByName(nome);
    } catch (erro) {
      throw new InternalServerErrorException('Erro ao buscar cliente por nome');
    }
    }
    async findByEmail(email: string) {
      try {
    return await this.repo.findByEmail(email);
      } catch (erro) {
        throw new InternalServerErrorException('Erro ao buscar cliente por email');
      }
    }
    async update(id: string, updateClienteDto: UpdateClienteDto) {  
    const existingCliente = await this.repo.findById(id); 
    if (!existingCliente) {
      throw new NotFoundException(`Cliente with id ${id} not found`);
    }
    if (updateClienteDto.email) {
      const emailOwner = await this.repo.findByEmail(updateClienteDto.email);
        if (emailOwner && emailOwner.id !== id) {
            throw new ConflictException(`Email ${updateClienteDto.email} is already in use`);
        }
    }
    try {
      return await this.repo.update(id, updateClienteDto);
    } catch (erro) {
      throw new InternalServerErrorException('Erro ao atualizar cliente');
    }
    }
    async remove(id: string) {
      const existingCliente = await this.repo.findById(id);
      if (!existingCliente) {
      throw new NotFoundException(`Cliente with id ${id} not found`);
    }
    try {
      return await this.repo.delete(id);
    } catch (erro) {
      throw new InternalServerErrorException('Erro ao excluir cliente');
    }
  }
}
