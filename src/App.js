import express from 'express'

const app = express()
app.use(express.json()) // Isso daqui é conhecido como Middleware. Essa função serve para interceptar os dados que estão trafegando dentro do http e fazer alterações. Essas alterações possuem diversos fins, mas nesse caso, essa alteração irá pegar todos os resultados e garantir que, os dados do body que sejam compatíveis com o formato json, sejam convertidos. Isso se faz necessário porque os dados que chegam via body em uma requisição, vêm em formato string

const games = [
    {
        id: 1,
        titulo: 'God of War'
    },
    {
        id: 2,
        titulo: 'Red Dead Redemption'
    }
]

function buscaGame(id) {
    return games.findIndex(game => {
        return game.id === Number(id) // Aqui tenho que implicitamente converter para number, pois os dados que trafegam no http são strings
    })
}

app.get('/', (req, res) => {
    res.status(200).send("Curso de Node.js")
})


app.get('/games', (req, res) => (
    res.status(200).json(games)
))

app.get('/games/:id', (req, res) => {
    const index = buscaGame(req.params.id) // A propriedade 'params' serve para acessar os parâmetros vindos da rota. No caso 'id'
    res.status(200).json(games[index])
})

app.post('/games', (req, res) => { // A informação vinda depois de um ':' será variável
    games.push(req.body)
    res.status(201).send("Livro cadastrado com sucesso!") // 201 é o código status http de registro criado 
})

app.put('/games/:id', (req, res) => {
    const index = buscaGame(req.params.id)
    games[index].titulo = req.body.titulo
    res.status(200).json(games)
})

app.delete('/games/:id', (req, res) => {
    const index = buscaGame(req.params.id)
    games.splice(index, 1)
    res.status(200).send('Livro removido com sucesso!')
})

export default app