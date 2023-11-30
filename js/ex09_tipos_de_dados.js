/* Tipos de Dados */

/*
    boolean
        - true pode ser representado pelo numero 1
        - false ('' "" `` strings vazias são considerados 'false')
    null
        - valor como nulo, avalorado mas atribuído
    undefined
        - quando um identificador não recebe nenhuma atribuição
    Number
        - +Infinity -Infinity NaN (Not a Number)
        - Double Precision 64-bit binary format IEEE 754
        - Decimal.js ajuda com a precisão dos valores
        - [syntactic sugar] 
            - Podem usar notação exponencial de base 10 'e[valor]'
                exemplos: 1e2 = 100, 1e-1 = 0.1
            - Podem usar notacao com underscore '_' para facilitar a
              visualização de números grandes
                exemplo: 1_234 = 1234
          
    string
        - "" '' `` (crase, acento invertido: string templates são usadas para interpolação com código)
        - "" precisa do caractere '\"' para representar aspas duplas
        - '' podem usar o caractere literal '"' para representar aspas duplas e aceita quebra de linha
             semelhante a tag <pre> do html, mantendo os espaços também
        - `${ bloco de código com retorno string}` imprime a string resultando do código
        - São concatenadas com o operador '+'
        - Concatenando com números, converte o Number para string
        - Com o operador '-', tenta converter a string para Number
    Symbol
        - São dados únicos criado pela função Symbol(valor)
    Object
        - Tipo de dado que pode ser definido pelo usuário pode possuir campos
        - A sua notação é JSON - JavaScript Notation Object
        - Exemplo: { propriedadeX: valor, propriedadeY: function(){}, ...}
        - Pode ser criados a partir de classes
            class Classe { propriedade; constructor(){} function metodo(){} ...}
        - Podem ter seus membros acessados e atribuídos por indexador
            exemplo: obj[propriedade] ou obj.propriedade
        - Quando uma proriedade recebe uma função, ela é chamada de método
*/
console.log("true")
console.log( true == 0)
console.log( true == 2)
console.log( true == 1)

console.log("false")
console.log( false == '')
console.log( false == "")
console.log( false == ``)

console.log("-- String `` ---")
let opera = { tipo: "boa"}
console.log( `${opera}`)

function a () {return 1}
let fB = function() { }

console.log( `${ a() }`)
console.log( `${ fB }`)
console.log( `${ fB() }` + `funcao sem retorno`) // undefined para o retorno (void)
console.log( `${undefined}`)
console.log( `${undefined} \`\` + ` + 'concatenando \'\' + ' + "com strings \"\"")
console.log("Concatenando numéros e strings - left to right expression")
console.log(16 + 4 + "Volvo")
console.log("Volvo" + 16 + 4)
console.log('10' - 16 + 4)
console.log('a' - 16 + 4) // NaN - Não é um números


console.log(" --- Stringfy --- ")
let x = { nome: undefined}
console.log(JSON.stringify(x))

let y = { nome: null}
console.log(JSON.stringify(y))

console.log("Numbers")
console.log(typeof NaN)
console.log(123e5)  // 12300000
console.log(123e-5) // 0.00123
console.log(12_1_23) // underscore notation
console.log(0xFF) // hexadecimal notation

// Hexadecimal é base 16. Decimal é base 10. Octal é base 8. Binário é base 2.
let nbases = 32
console.log(`${ nbases.toString(16) } | ${ nbases.toString(10) } | ${ nbases.toString(8) } | ${ nbases.toString(2) }` )

console.log("Symbols")

let s1 = Symbol("a")
let s2 = Symbol("a")
let s3 = Symbol({amelia: "azul"})

console.log("symbols a e b: " + (s1 === s2) )
console.log(Object(s3) )

console.log(" ---- Objects ---- ")
const obj1 = { nome: 12, "nome2": "nome"}
console.log(obj1)
console.log(obj1["nome"])
console.log(obj1.nome2)
obj1["nome"] = 22
obj1.nome2 = "Novo Nome"
console.log(obj1["nome"])
console.log(obj1.nome2)

// Funções como variáveis e métodos em classe de objeto
console.log(" -- Funções e Métodos -- ")
class Oba {
     nome;
     constructor(){ this.nome = "Oba Nome" }
     print = function() { console.log("oba, papai") }
     contexto = function() { console.log(`${ this.nome }`) }
     contexto2() { console.log(`${ this.nome }`) }
}

const oOba = new Oba()
const novoprint = oOba.print
const metodo = oOba.contexto
const metodo2 = oOba.contexto2

novoprint()
oOba.print()

oOba.contexto()
//metodo() // Error porque não pode acessar o 'this.nome'

oOba.contexto2()
//metodo2() // Error porque não pode acessar o 'this.nome'

const pessoa = {
    nome: "Naruto",
    falar: function(){
        console.log(this.nome)
    }
}

const novoMetodo = pessoa.falar

console.log(" --- Metodos ---- ")

pessoa.falar()
novoMetodo() // não da erro por ser de uma declaração direta de objeto em variável.

// Para conseguir utilizar o 'this' é preciso usar o recurso de prototype com objeto nomeado
Oba.prototype.falar2 = function() { console.log(`${ this.nome }`) }

const metodo3 = oOba.falar2
metodo3() // não vai dar erro, pois agora está adicionado no protótipo

metodo3.nome = "oba"
metodo3() // Não da erro, mas não define this.nome

pessoa.falar2 = function() { console.log(`${ this.nome }`) }

const metodo4 = pessoa.falar2
metodo4() // não vai dar erro, pois agora está adicionado no protótipo


