/* Média de Notas */

let nota1, nota2, nota3

nota1 = 10
nota2 = 3
nota3 = 8

let media = ( nota1 + nota2 + nota3 ) / 3

if (media >= 7){
    console.log("Parabéns, aluno aprovado!")
}
else if(media > 5){
    console.log("Alerta, aluno em recuperação!")
}
else{
    console.log("Triste, aluno reprovado!")
}