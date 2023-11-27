/* Operadores Aritméticos */

let i = 1;

i = i + 1 // SOMA '+'
console.log(i)

i = i - 1 // SUBTRAÇÃO '-'
console.log(i)

i = i * 8 // MULTIPLICAÇÂO '*'
console.log(i)

i = i / 4 // DIVISÃO '/'
console.log(i)

i = i % 2 // MÓDULO(RESTO DE DIVISÃO) '%'

/* Operadores Condicionais */

let a, b
a = true
b = false

console.log("lógico")
console.log("Igualdade '==' : " + (a == a) ) // Igualdade
console.log(a == b) // Igualdade
console.log("Diferença '!=' : " + (b != a) ) // Diferença
console.log(b != b) // Diferença

console.log(b && b) // E lógico
console.log(b || b) // OU lógico

console.log(1 > 1)  // Maior que
console.log(2 >= 2) // Maior ou igual a
console.log(3 < 2)  // Menor que
console.log(3 <= 2) // Menor ou igual a

console.log("-- '==' vs '===' ---")

/* '==' ignora o tipo  */
console.log( (4 % 2) == '0') // Conversão implícitoa

/* '===' */
console.log( (4 % 2) === '0') // Retorna false
