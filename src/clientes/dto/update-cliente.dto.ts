import { PartialType } from '@nestjs/mapped-types';//importa a função PartialType do NestJS para criar um DTO de atualização baseado no DTO de criação
import { CreateClienteDto } from './create-cliente.dto'; //importa o DTO de criação para reutilizar as validações

export class UpdateClienteDto extends PartialType(CreateClienteDto) {}