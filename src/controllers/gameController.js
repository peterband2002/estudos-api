import game from '../models/games.js'
import { dev } from '../models/Devs.js'

class GameController {

    // Create
    static async cadastrarGame(req, res) {

        const novoGame = req.body

        try {

            const gameEncontrado = await dev.findById(novoGame.desenvolvedora)
            const gameCompleto = { ...novoGame, dev: { ...gameEncontrado._doc } }
            const gameCriado = await game.create(gameCompleto)

            // const novoGame = await game.create(req.body) // create() é um método do mongoose para criar um registro no banco de dados. Por definição, esse método retorna o registro que foi criado, tornando possível fazermos tratativas em cima dele
            res.status(201).json({ message: "Criado com sucesso!", game: gameCriado })
        } catch(err) {
            res.status(500).json({ message: `${err.message} -  falha ao cadastrar game` })
        }
    }

    // Read
    static async listarGames(req, res) {
        try {
            const listaGames = await game.find({})// O find() é um método do mongoose que irá se conextar com o Atlas e "buscar" registro que serão passados dentro de seu escopo. Aqui como não passei nenhuma especificação, ele irá trazer tudo que encontrar na coleção "games"
            res.status(200).json(listaGames)
        } catch(err) {
            res.status(500).json({ message: `${err.message} - falha ao consultar games` })
        }
    }

    // Read - specific
    static async listarGamePorId(req, res) {

        try {
            const id = req.params.id
            const gameEncontrado = await game.findById(id)
            res.status(200).json(gameEncontrado)
        } catch(err) {
            res.status(500).json({ message: `${err.message} - falha ao consultar game` })
        }
    }

    // Update
    static async atualizarGame(req, res) {
        try {
            const id = req.params.id
            await game.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Livro atualizado!" })
        } catch(err) {
            res.status(500).json({ message: `${err.message} - falha na atualização` })
        }
    }

    // Delete
    static async excluirGame(req, res) {
        try{
            const id = req.params.id
            await game.findByIdAndDelete(id)
            res.status(200).json({ message: "Livro excluído!" })
        } catch(err) {
            res.status(500).json({ message: `${err.message} - falha na exclusão` })
        }
    }

    static async listarGamesPorDev(req, res) {
        const dev = req.query.dev

        try {
            const gamesPorDev = await game.find({ dev: dev })
            res.status(200).json(gamesPorDev)
        } catch(err) {
            res.status(500).json({ message: `${err.message} - falha na busca` })
        }
    }
}

export default GameController