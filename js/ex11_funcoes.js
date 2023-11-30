/* Funções e Afins */

function comContexto(){
    console.log(this)
}

const semContexto = () => {
    console.log(this)
}

const narto = {
    nome: 'Narto',
    comContexto,
    semContexto
}

narto.comContexto()
narto.semContexto()

/* Closure */

function soma(x){ 
    return function(y){ 
        return x + y
    } 
}

function soma2(x){ 
    return (y) => { 
        return x + y
    } 
}

// executa a primeira função e depois a segunda com o contexto inicial criado.
console.log('soma(10)(20): ' + soma(10)(20))

console.log("Closure com Função Anônima (10)")
const somaParcial = soma(10) // Guardou o contexto x = 10

console.log('soma +20: ' + somaParcial(20)) // aplicou o X na soma com o Y
console.log('soma +30: ' + somaParcial(30))

console.log("Closure com Arrow Function (15)")
const somaParcial2 = soma2(15) // Guardou o contexto x = 15

console.log('soma +20: ' + somaParcial2(20)) // aplicou o X na soma com o Y
console.log('soma +30: ' + somaParcial2(30))

/* Invocações */
const narto4 = { nome: 'narto', idade: 33}

function gritar(prefixo){
    console.log(prefixo, this.nome)
}

console.log('Invocação direta: ' + somaParcial()) // invocação direta
gritar.apply(narto4, ['pela função de função "metodo.apply(context, [args])"'])
gritar.call(narto4, 'pela função de função "metodo.call(context, args, arg2, ..., argN)"')
gritar("Sem contexto: ")

/* Callbacks */

function adicao(x, y){
    return x + y
}

function multiplicacao(x, y){
    return x * y
}

function calculadora(x, operacao, y){
    console.log("Estrategy patterns com callback: " + operacao(x, y) )
}

calculadora(10, adicao, 20)
calculadora(5, multiplicacao, 6)

//document.getElementById('btn1').addEventListener('click', () =>{ console.log('clicou') }) // exemplo em callback on events