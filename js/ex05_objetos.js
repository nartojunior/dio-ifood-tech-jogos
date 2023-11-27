/* Objetos - JSON - Java(S)cript Object Notation */
class Pessoa {
    nome;
    idade;
    dobrar(){ console.log(this.idade * 2) }
    
    constructor(nome, idade){
        this.nome = nome    
        this.idade = idade
    }
}

let nartinho = new Pessoa('Nartinho TLEXI', 9)
console.log(nartinho)
console.log('============')

const pes = new Pessoa()
pes.nome = 'narto'
pes['idade'] = 33
pes.dobrar()

console.log(pes)
console.log('=====')

const narto = 
{ 
    nome: 'narto', 
    idade: 33, 
    dobrar: (function(num) { return num * 2}),
    dobrarIdade: function(){ return this.idade * 2},
    good:  (function(){ return `${ this.nome }` })
}

function nada(){}

console.log(narto)
console.log(narto.idade)
console.log(narto.nome)
console.log(narto.dobrar(10))
console.log(narto.dobrarIdade(10))
// Interpolação de string é feita com o caractere de crase '`', passando as variáveis na estrrutura '${ valor || variável }'
console.log(`${narto.good()}`) 
console.log(`${nada()}`) 
console.log('----------') 
// Pode usar 'delete' para remover um membro do objeto
delete narto.idade

console.log(narto)

// Acesso dinâmico estilo coleção
let attrib = 'nome'
narto[attrib] = 'Narto Junior'
console.log(narto['nome']) 