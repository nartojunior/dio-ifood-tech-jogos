/* Arrays e Listas */
const nomes = [ 'narto', 'eduardo', 'paulo']
console.log(nomes)

console.log(nomes[0]) // Pode acessar via índices

// lista vazia
const lista_vazia = []

// Métodos
nomes.push('andré') // adiciona elemntos
console.log(nomes)

let nome = nomes.pop(); // remove o último elemento adicionado.
console.log("Poped: " + nome)
console.log(nomes)

let nome2 = nomes.shift(); // remove o primeiro elemento adicionado.
console.log("Shifted: " + nome)
console.log(nomes)
