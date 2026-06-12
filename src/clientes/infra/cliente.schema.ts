    import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
    import { Document } from 'mongoose';

    export type ClienteDocument = ClienteModel & Document;

    @Schema({ timestamps: true })
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
    ClienteSchema.post('init', function() {});