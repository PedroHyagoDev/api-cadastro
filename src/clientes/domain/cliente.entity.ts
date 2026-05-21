export class Cliente {
    id!: string; //gerado automaticamente
    nome: string;
    email: string;
    phone: string;
    endereco: string;
    criadoEm: Date; 
    constructor(nome: string, email: string, phone: string, endereco: string, criadoEm: Date) {
        this.nome = nome;
        this.email = email;
        this.phone = phone;
        this.endereco = endereco;
        this.criadoEm = criadoEm;
    } 
}   