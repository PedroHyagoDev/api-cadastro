import { Injectable, NotFoundException, ConflictException, Inject, InternalServerErrorException, HttpException } from '@nestjs/common';
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
  const emailOwner = await this.repo.findByEmail(createClienteDto.email);
    if (emailOwner) {
    throw new ConflictException('Email já cadastrado');}
    const telefoneOwner = await this.repo.findByTelefone(createClienteDto.telefone);
    if (telefoneOwner) {
      throw new ConflictException('Telefone já cadastrado');
    }
    try {
    return await this.repo.create(createClienteDto);
}   catch (erro) {
    console.log('ERRO CREATE:', erro);
    throw new InternalServerErrorException('Erro ao cadastrar cliente');
    }
    }
    async findAll() {
    try {      return await this.repo.findAll();
    } catch (erro) {      console.log('ERRO:', erro); 
      throw new InternalServerErrorException('Erro ao buscar clientes');
    } 
    }
   
    async findOne(id: string) {
      try {
    const cliente = await this.repo.findById(id);
    if (!cliente) {
      throw new NotFoundException(`Cliente com o ID ${id} não encontrado.`);
    }
    return cliente;
      } catch (erro) {
        if (erro instanceof HttpException) throw erro;
        console.log('ERRO:', erro);
        throw new InternalServerErrorException('Erro ao encontrar cliente');
      }
    }

    async findByName(nome: string) {
  try {
    const clientes = await this.repo.findByName(nome);
    if (!clientes || clientes.length === 0) {
      throw new NotFoundException(`Nenhum cliente encontrado com o nome ${nome}.`);
    }
    return clientes;
  } catch (erro) {
    if (erro instanceof HttpException) throw erro;
    console.log('ERRO:', erro);
    throw new InternalServerErrorException('Erro ao buscar cliente por nome');
  }
}

    async findByEmail(email: string) {
      try {
        const cliente = await this.repo.findByEmail(email);
        if (!cliente) {
          throw new NotFoundException(`Cliente com o email ${email} não encontrado.`);
        }
        return cliente;
      } catch (erro) {
        if (erro instanceof HttpException) throw erro;
        console.log('ERRO:', erro); 
        throw new InternalServerErrorException('Erro ao buscar cliente por email');
      }
    }

    async update(id: string, updateClienteDto: UpdateClienteDto) {  
    const existingCliente = await this.repo.findById(id); 
    if (!existingCliente) {
      throw new NotFoundException(`Cliente com o ID ${id} não encontrado.`);
    }
    if (updateClienteDto.email) {
      const emailOwner = await this.repo.findByEmail(updateClienteDto.email);
        if (emailOwner && emailOwner.id !== id) {
            throw new ConflictException(`O e-mail ${updateClienteDto.email} já está em uso.`);
        }}
    if (updateClienteDto.telefone) {
      const telefoneOwner = await this.repo.findByTelefone(updateClienteDto.telefone);
      if (telefoneOwner && telefoneOwner.id !== id) {
        throw new ConflictException(`O telefone ${updateClienteDto.telefone} já está em uso.`);
      }
    }
    try {
      return await this.repo.update(id, updateClienteDto);
    } catch (erro) {
      if (erro instanceof HttpException) throw erro;
      console.log('ERRO:', erro); 
      throw new InternalServerErrorException('Erro ao atualizar cliente');
    }}

    async remove(id: string) {
      const existingCliente = await this.repo.findById(id);
      if (!existingCliente) {
      throw new NotFoundException(`Cliente com o ID ${id} não encontrado.`);
    }
    try {
      return await this.repo.delete(id);
    } catch (erro) {
      if (erro instanceof HttpException) throw erro;
      console.log('ERRO:', erro); 
      throw new InternalServerErrorException('Erro ao excluir cliente');
    }
  }
}
