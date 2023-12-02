//console.debug("Legal")
//console.log("Listando Log")

/* declarando variáveis */

var ler = true // variavel de escopo global
let i = 10  // variavel mutável em tempo de execução
const PI = 3.14 // Constante imutável, necessita ser atribuída na declaração

console.log(i)

i = 35
console.log (i)
console.log(PI)

/* Hoisting (Içamento) */
/* 
    O javascript coloca todas as declarações antes das execuções,
    como se ele colocasse os identificadores no início do arquivo
    antes de analisar as execuções.
*/

// É possível executar uma função antes de sua declaração

mostre()
function mostre() { console.log("mostrando") }

//a() // | Não é possível usar quando a atribuição é de um método/function

let a = function() { console.log("anonima")}

// efeito global de variavel declarar com 'var'

if (true) { var valor = 12 } // variável global declarada no escopo do 'if' (local)
console.log(valor) // acessando valor da variável global.
// vazamento de escopo.
// variável 'var' não sofrem hoisting em função.
function teste() { var valor2 = 10 }
teste()
// console.log(valor2) // Erro de acesso de variável não atribuída.

