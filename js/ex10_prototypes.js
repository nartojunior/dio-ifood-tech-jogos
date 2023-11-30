/* Prototypes */

const pessoa = {
    genero: `M`   
}

pessoa.altura = 173 // cadeia dinâmica de chave:valor

// Objeto Anônimo
console.log(pessoa) // { genero: 'M', altura: 173 }

const narto = {
    nome:"Narto",
    idade: 33,
    __proto__: pessoa // herança 
}

console.log(narto.genero)

/* Funções e seu super poder 'new' */

// funções construtoras começa em PascalCase

function Pessoa(nome, idade){
    // cria escopo. Pode usar o 'this'
    this.nome = nome
    this.idade = idade
}

// Pode ser invocadas pela keyword 'new'
const narto2 = new Pessoa("narto", 33)

console.log(narto2) // Pessoa { nome: 'narto', idade: 33 }

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é: ${this.nome}`)
}

narto2.falar()

// equivalente em ES6 - Função Pessoa acima + prototype e método falar()
class Pessoa2{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    falar () {
        console.log(`Meu nome é: ${this.nome}`)
    }
}
// Uma função construtora e uma classe não podem ter o mesmo identificador/nome
let narto3 = new Pessoa2("narto", 33)
narto3.falar()
console.log(narto3)

/* Sobrescrita e Sombreamento (Shadowing) */

const carro = { marca: "nissan"}
const gtr = { nome: "gtr", __proto__: carro}

console.log(gtr.marca) // Se não encontrar a propriedade no objeto, ele varre o protótipo ( __proto__ )

gtr.marca = "nissan2"
console.log(gtr.marca + " " + carro.marca)

// Atentar para a cadeia de busca de protótipos.

let objProt = Object.create(carro) // cria um objeto em que o prototype é carro.

objProt.nome = "sentra"

console.log(objProt)
console.log(objProt.marca) // percorreu o prototype

// em objetos concretos acessa por 'prototype: obj'
// Em variáveis de objetos acessa por 'var.__proto__'

// Passagem de escopo pela função call()

function Sentra(nome, combustivel){ 
    this.nome=nome
    this.combustivel= combustivel
}

const carro2 = {}
Sentra.prototype.ligar = function(){ console.log("Ligando motor") }

console.log(carro2)

Sentra.call(carro2, 'sentra', 'flex') // enriquecimento de objetos
console.log(carro2)

// com o operador 'new' ele faz a varredura de prototype.
const carro3 = new Sentra("sentrinha", "flex")
carro3.ligar()

//carro2.ligar() // Vai dar erro aqui, pois call() não passa prototype.

// Cuidado ao modificar prototypes de tipos primitivos
String.prototype.withSpecial = function() { return `Special: ${this}`}

console.log( 'Super Combo breaker!'.withSpecial() )