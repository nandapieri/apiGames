let listaGames = []

module.exports = {
    listar() {
        return listaGames
    },
    inserir(game){
        listaGames.push(game)
        return game
    }
}