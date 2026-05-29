import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly service: ClientesService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.service.create(createClienteDto);// Rota para criar um novo cliente
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }// Rota para obter todos os clientes
  
    @Get('search/name/:nome')
    findByName(@Param('nome') nome: string) {
      return this.service.findByName(nome);
    }// Rota para obter clientes por nome

    @Get('search/email/:email')
    findByEmail(@Param('email') email: string) {
      return this.service.findByEmail(email);
    }// Rota para obter um cliente específico por email
     @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);// Rota para obter um cliente específico por ID
  } 

    @Put(':id')
    update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.service.update(id, updateClienteDto);// Rota para atualizar um cliente específico por ID
    }
    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string) {
    return this.service.remove(id);// Rota para remover um cliente específico por ID
    }
    
}