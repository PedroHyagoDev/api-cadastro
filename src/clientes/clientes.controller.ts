import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly service: ClientesService) {}

  @ApiOperation({ summary: 'Criar um novo cliente' })
  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.service.create(createClienteDto);
  }
  @ApiOperation({ summary: 'Obter todos os clientes' })
  @Get()
  findAll() {
    return this.service.findAll();
  }
  
    @ApiOperation({ summary: 'Obter clientes por nome' })
    @Get('search/name/:nome')
    findByName(@Param('nome') nome: string) {
      return this.service.findByName(nome);
    }

    @ApiOperation({ summary: 'Obter um cliente por email' })
    @Get('search/email/:email')
    findByEmail(@Param('email') email: string) {
      return this.service.findByEmail(email);
    }
     @ApiOperation({ summary: 'Obter um cliente por ID' })
     @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  } 

    @ApiOperation({ summary: 'Atualizar um cliente por ID' })
    @Put(':id')
    update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.service.update(id, updateClienteDto);
    }
    @ApiOperation({ summary: 'Remover um cliente por ID' })
    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string) {
    return this.service.remove(id);
    }
    
}