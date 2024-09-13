// import http from 'http'
import app from './src/App.js'

const PORT = 3000

// const rotas = {
//     "/": "Curso de Express API",
//     "/livros": "<h1><strong>Entrei na rota livros</strong></h1>",
//     "/games": "Entrei na rota dos gamers"
// }

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" })
//     res.end(rotas[req.url])
// })

app.listen(PORT, () => {
    console.log('Servidor escutando!')
})