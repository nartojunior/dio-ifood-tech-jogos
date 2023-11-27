class Pessoa{
    nome;
    peso_kg;
    altura_m;

    constructor(nome, peso, altura){
        this.nome = nome
        this.peso_kg = peso
        this.altura_m = altura
    }

    calcIMC()
    {
        let imc = this.peso_kg / Math.pow(this.altura, 2)
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
}


let narto = new Pessoa('narto', 95, 1.73)
narto.calcIMC()