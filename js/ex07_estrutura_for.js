/* Estrutura de Repetição */

let notas = [7, 8, 8, 9]
console.log("Qts notas: " + notas.length)
let soma = 0

for (let i = 0; i < notas.length; i++){
    soma += notas[i]
}

console.log("Media: " + (soma / notas.length).toFixed(2))

const nome = 'Narto'
for(let i = 0; i < nome.length; i++){
    console.log(nome[i])
}