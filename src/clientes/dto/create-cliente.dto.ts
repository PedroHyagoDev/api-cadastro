import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsNotEmpty()  // ← não pode ser vazio
  @IsString()    // ← tem que ser texto
  nome!: string;

  @IsNotEmpty()  // ← não pode ser vazio
  @IsEmail()     // ← tem que ser um email válido
  email!: string;

  @IsNotEmpty()  // ← não pode ser vazio
  @IsString()    // ← tem que ser texto
  phone!: string;

  @IsNotEmpty()  // ← não pode ser vazio
  @IsString()    // ← tem que ser texto
  endereco!: string;
}