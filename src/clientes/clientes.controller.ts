import { Controller, Get } from '@nestjs/common';

@Controller('clientes')
export class ClientesController {
     
@Get()
 listarClientes() {
  return [
    {
        id: 1,
        nome: 'João Silva',
        email: 'joaozin@gmail.com',
        phone: '11987654321'
     },
     {
        id: 2,
        nome: 'Maria Souza',
        email: 'maria.souza@gmail.com',
        phone: '11987654321'
     },
     {
        id: 3,
        nome: 'Carlos Oliveira',
        email: 'carlos.oliveira@gmail.com',
        phone: '11987654321'
     }
  ];
} 
}
 
