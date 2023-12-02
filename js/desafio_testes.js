
let nomePersonagem = "Narto"
let acaoEscolhida = "Fugir"

function mensagem(acao, nome ){
    if (acao != 'Fugir' && acao != "Atacar") {
      return "Tente novamente"
    }
    else{
      return nome + " " + acao + "!"
    }
  }
  
  //TODO: Verifique a ação escolhida e exibir a mensagem correspondente:
  console.log( mensagem(acaoEscolhida, nomePersonagem) )