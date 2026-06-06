export class Cliente {
    id!: string; //gerado automaticamente
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
    criadoEm: Date; 
    constructor(nome: string, email: string, telefone: string, endereco: string, criadoEm: Date) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        this.criadoEm = criadoEm;
    } 
}   