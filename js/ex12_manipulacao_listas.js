/** Manipulação de Listas */

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const cb = (value, i, listRef) => {
    console.log(value, i, listRef)
}

/** forEach() */
// normalmente  lista.forEach(value)
//lista.forEach(cb)

for (let i = 0; i<lista.length; i++){
    const element = lista[i]
    //cb(element, i, lista)
}

// return boolean - true retorna, false ignora
let listaNumPares = lista.filter( (element) => {return element % 2 === 0 } )
console.log(listaNumPares)

/** Map */

class Pessoa{
    constructor(name){
        this.name = name
    }
}

const pessoas = [new Pessoa('Narto'), new Pessoa('Nartinho'), new Pessoa('Papai'), new Pessoa('Jo') ]
console.log(pessoas)

const listaNomes = pessoas.map( (element) => element.name ) // conversão de objetos
console.log(listaNomes)

/** Reduce */
// reduzir a lista a um único valor
const somalista = lista.reduce( (previous, current) => { return previous + current  })
console.log(somalista)

const somalista2 = lista.reduce( 
    (previous, current) => { return previous + current  } ,
    10 //valor inicial do reduce
)
console.log(somalista2)

/** Join */

const listaMenor = [1, 2, 3]
console.log(listaMenor.join(';'))

const listaEmHTML = pessoas
    .filter( (e) => e.name.startsWith('N') ) // Pega apenas quem inicia com  'N'
    .map( e => `<li>${e.name}</li>`) // Mapeia para <li>Pessoa.nome</li>
    .join('\n') // junta os valores colocando uma quebra de linha

console.log(listaEmHTML)