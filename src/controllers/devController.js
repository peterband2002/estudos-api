import { dev } from '../models/Devs.js'

class DevController {

    // Create
    static async cadastrarDev(req, res) {
        try {
            const novoDev = await dev.create(req.body) // create() é um método do mongoose para criar um registro no banco de dados. Por definição, esse método retorna o registro que foi criado, tornando possível fazermos tratativas em cima dele
            res.status(201).json({ message: "Criado com sucesso!", dev: novoDev })
        } catch(err) {
            res.status(500).json({ message: `${err.message} -  falha ao cadastrar desenvolvedora` })
        }
    }

    // Read
    static async listarDev(req, res) {
        try {
            const listaDev = await dev.find({})// O find() é um método do mongoose que irá se conextar com o Atlas e "buscar" registro que serão passados dentro de seu escopo. Aqui como não passei nenhuma especificação, ele irá trazer tudo que encontrar na coleção "games"
            res.status(200).json(listaDev)
        } catch(err) {
            res.status(500).json({ message: `${err.message} - falha ao consultar desenvolvedoras` })
        }
    }

    // Read - specific
    static async listarDevPorId(req, res) {

        try {
            const id = req.params.id
            const devEncontrado = await dev.findById(id)
            res.status(200).json(devEncontrado)
        } catch(err) {
            res.status(500).json({ message: `${err.message} - falha ao consultar dev` })
        }
    }

    // Update
    static async atualizarDev(req, res) {
        try {
            const id = req.params.id
            await dev.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Desenvolvedora atualizada!" })
        } catch(err) {
            res.status(500).json({ message: `${err.message} - falha na atualização` })
        }
    }

    // Delete
    static async excluirDev(req, res) {
        try{
            const id = req.params.id
            await dev.findByIdAndDelete(id)
            res.status(200).json({ message: "Desenvolvedora excluída!" })
        } catch(err) {
            res.status(500).json({ message: `${err.message} - falha na exclusão` })
        }
    }
}

export default DevController