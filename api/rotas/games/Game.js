const listaGames = require('./listaGames')

class Game {
    constructor({ nome }){
        this.nome = nome
    }
    criar() {
        const campos = ['nome']
        const dados = {}
        campos.forEach((campo) => {
            const valor = this[campo]
            if(typeof valor === 'string' && valor.length > 0) {
                dados[campo] = valor
            }
        })
        if(Object.keys(dados).length === 0) {
            throw new Error('Não foram fornecidos dados para atualizar o objeto')
        }
        listaGames.inserir(dados)
        return(this)
    }
}

module.exports = Game