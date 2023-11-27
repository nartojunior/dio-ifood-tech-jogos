/* IMC */
let massa_kg = 95
let altura_m = 1.73

const IMC = massa_kg / (altura_m * altura_m)
const IMC2 = massa_kg / Math.pow(altura_m, 2) // Math é biblioteca matemática


console.log("IMC = " + IMC.toFixed(2))
calcIMC(IMC)

console.log("IMC2 = " + IMC2.toFixed(2))
calcIMC(IMC2)


function calcIMC(imc) {
    if (imc <= 18.5){
        console.log("Abaixo do peso!")
    }
    else if(imc < 25){
        console.log("Peso ideal;")
    }
    else if(imc < 30){
        console.log("Acima do peso")
    }
    else if(imc < 40){
        console.log("Obeso")
    }
    else{
        console.log("Obesidade mórbida")
    }
}