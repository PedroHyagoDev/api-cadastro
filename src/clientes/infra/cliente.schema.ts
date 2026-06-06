    import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
    import { Document } from 'mongoose';

    export type ClienteDocument = ClienteModel & Document;//define o tipo do documento do cliente como a interseção entre o modelo do cliente e o documento do Mongoose

    @Schema({ timestamps: true })//decorador para definir o esquema do Mongoose com a opção de timestamps para criar automaticamente os campos createdAt e updatedAt
    export class ClienteModel {
    @Prop({ required: true })
    nome!: string;

    @Prop({ required: true ,unique:true})
    email!: string;

    @Prop({ required: true ,unique:true})
    telefone!: string;

    @Prop()
    endereco?: string;
    }
    export const ClienteSchema = SchemaFactory.createForClass(ClienteModel);