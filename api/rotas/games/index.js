const roteador = require('express').Router()
const listaGames = require('./listaGames')
const Game = require('./Game')

roteador.get('/', (req, res) => {
    res.send(
        JSON.stringify(listaGames.listar())
    )
})

roteador.post('/', (req,res) => {
    try{
        const dadosRecebidos = req.body
        const game = new Game(dadosRecebidos)
        const retorno = game.criar()
        res.send(
            JSON.stringify(retorno)
        )
    } catch(e) {
        res.send(
            JSON.stringify({
                message: e.message
            })
        )
    }
    
})

module.exports = roteador