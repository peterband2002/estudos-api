import express from 'express'
import DevController from '../controllers/devController.js'

const routes = express.Router()

routes.post('/devs', DevController.cadastrarDev)
routes.get('/devs', DevController.listarDev)
routes.get('/devs/:id', DevController.listarDevPorId)
routes.put('/devs/:id', DevController.atualizarDev)
routes.delete('/devs/:id', DevController.excluirDev)

export default routes