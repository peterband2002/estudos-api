import mongoose, { mongo } from "mongoose"; // Mongoose é a biblioteca que estou utilizando para fazer a ponte entre o banco de dados (mongodb atlas) e a aplicação (minha aplicação). Então todo método que irei utilizar para manipulação do banco de dados, será provida pelo mongoose

async function conectDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING) // Aqui estou importando a string de conexão que está no arquivo .env

    return mongoose.connection
}

export default conectDatabase