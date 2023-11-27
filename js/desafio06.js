class Carro{
    marca;
    cor;
    consumo_medio;
    constructor(marca, cor, consumo_medio){
        this.marca = marca
        this.cor = cor
        this.consumo_medio = consumo_medio
    }
}

let sentra = new Carro('Nissan', 'Preto(a)', 1)
let ditancia_km = 10
let preco_combustivel_litro = 5.89


function viagem(carro, distancia, preco_conbustivel){
    let custo = carro.consumo_medio * distancia * preco_conbustivel

    console.log(`O veículo da marca ${carro.marca} e de cor ${carro.cor} gastará R$ ${custo.toFixed(2)} na viagem.`)
}

viagem(sentra, ditancia_km, preco_combustivel_litro)


