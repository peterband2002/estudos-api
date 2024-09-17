import express from 'express'
import GameController from '../controllers/gameController.js'

const routes = express.Router()

routes.post('/games', GameController.cadastrarGame)
routes.get('/games', GameController.listarGames)
routes.get('/games/busca', GameController.listarGamesPorDev)
routes.get('/games/:id', GameController.listarGamePorId)
routes.put('/games/:id', GameController.atualizarGame)
routes.delete('/games/:id', GameController.excluirGame)

export default routes