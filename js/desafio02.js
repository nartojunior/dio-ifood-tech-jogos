const preco_etanol = 3
const preco_gas = 5

let tipoCombustivel = 'g' // 'e'

const gasto_medio_km = 0.5
const distante_km = 15


function calcGasto(tipoCombustivel) {
    if (tipoCombustivel == 'g'){
        console.log("Gasto da viagem da gasolina em R$: " + (preco_gas * gasto_medio_km * distante_km).toFixed(2) )
    } 
    else if (tipoCombustivel == 'e')
    {
        console.log("Gasto da viagem do etanol em R$: " + (preco_etanol * gasto_medio_km * distante_km).toFixed(2) )
    }
}

calcGasto('g')
calcGasto('e')