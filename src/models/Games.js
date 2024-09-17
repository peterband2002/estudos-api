import mongoose from "mongoose";
import { devSchema } from "./Devs.js";

const gameSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId }, // O ObjectId é uma propriedade do Atlas para definir um identificador único
    titulo: { type: String, required: true },
    desenvolvedora: { type: String },
    preco: { type: Number },
    campanha: { type: Number },
    dev: devSchema
}, { versionKey: false }) // o Schema() seriam as propriedades da coleção. Traduzindo, seriam os campos de uma tabela. Como se fosse um construtor, definindo quais são os atributos de um game que defini no banco de dados 

const game = mongoose.model("games", gameSchema) // Aqui estou informando para model(), através do primeiro parâmetro, qual a coleção, previamente declarada no banco; e também quais as propriedades (schema) da minha coleção (segundo parâmetro)

export default game