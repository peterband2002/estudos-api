import mongoose from "mongoose";

const devSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String }
}, { versionKey: false })

const dev = mongoose.model("devs", devSchema)

export { dev, devSchema }