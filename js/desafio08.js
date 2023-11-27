let numero = 8

function tabuada(num){
    console.log("tabuada")
    for (let i = 1; i < 10; i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

tabuada(numero)
//tabuada(9)

/* PRIMOS */

const numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0)
    {
        console.log(numeros[i] )
    }
}

const numerosPares = [];

    for (let i = 0; i < 10; i = i + 2) {
        numerosPares.push(i);
    }

console.log(numerosPares);