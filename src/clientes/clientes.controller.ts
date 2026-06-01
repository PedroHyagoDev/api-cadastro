import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Clientes')//decorador para agrupar as rotas relacionadas a clientes na documentação do Swagger
@Controller('clientes')
export class ClientesController {
  constructor(private readonly service: ClientesService) {}

  @ApiOperation({ summary: 'Criar um novo cliente' })//decorador para adicionar uma descrição à rota no Swagger
  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.service.create(createClienteDto);// Rota para criar um novo cliente
  }
  @ApiOperation({ summary: 'Obter todos os clientes' })//decorador para adicionar uma descrição à rota no Swagger
  @Get()
  findAll() {
    return this.service.findAll();
  }// Rota para obter todos os clientes
  
    @ApiOperation({ summary: 'Obter clientes por nome' })//decorador para adicionar uma descrição à rota no Swagger
    @Get('search/name/:nome')
    findByName(@Param('nome') nome: string) {
      return this.service.findByName(nome);
    }// Rota para obter clientes por nome

    @ApiOperation({ summary: 'Obter um cliente por email' })//decorador para adicionar uma descrição à rota no Swagger
    @Get('search/email/:email')
    findByEmail(@Param('email') email: string) {
      return this.service.findByEmail(email);
    }// Rota para obter um cliente específico por email
     @ApiOperation({ summary: 'Obter um cliente por ID' })//decorador para adicionar uma descrição à rota no Swagger
     @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);// Rota para obter um cliente específico por ID
  } 

    @ApiOperation({ summary: 'Atualizar um cliente por ID' })//decorador para adicionar uma descrição à rota no Swagger
    @Put(':id')
    update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.service.update(id, updateClienteDto);// Rota para atualizar um cliente específico por ID
    }
    @ApiOperation({ summary: 'Remover um cliente por ID' })//decorador para adicionar uma descrição à rota no Swagger
    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string) {
    return this.service.remove(id);// Rota para remover um cliente específico por ID
    }
    
}