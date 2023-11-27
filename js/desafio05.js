/* Compra de produto em maquininha */

let preco_produto = 100
const forma_pag_debito = 'debito' // 1
const forma_pag_dinheiro = 'dinheiro' // 2
const forma_pag_pix = 'pix' // 3
const forma_pag_2x = '2x' // 4
const forma_pag_outro = 'outro'

calcMaquinhinha(preco_produto, forma_pag_debito)
calcMaquinhinha(preco_produto, forma_pag_dinheiro)
calcMaquinhinha(preco_produto, forma_pag_pix)
calcMaquinhinha(preco_produto, forma_pag_2x)
calcMaquinhinha(preco_produto, forma_pag_outro)

function calcMaquinhinha(preco, forma){

    if (forma === 'debito'){ 
        // 1
        console.log("Valor com desconto de 10% R$: " + (preco * 0.9).toFixed(2) )
    }
    else if (forma === 'dinheiro' || forma === 'pix'){
        // 2 e 3
        console.log("Valor com desconto de 15% R$: " + (preco * 0.85).toFixed(2) )
    }
    else if (forma === '2x'){
        // 4
        console.log("Valor sem juros de R$: " + (preco).toFixed(2))
    }
    else{
        console.log("Valor com juros de 10% R$: " + (preco * 1.1 ).toFixed(2) )
    }
}

/* Função Imediatamente Invocada (lambada)(); */
// Não precisa identificar
(function (preco, forma){

    if (forma === 'debito'){ 
        // 1
        console.log("Valor com desconto de 10% R$: " + (preco * 0.9).toFixed(2) )
    }
    else if (forma === 'dinheiro' || forma === 'pix'){
        // 2 e 3
        console.log("Valor com desconto de 15% R$: " + (preco * 0.85).toFixed(2) )
    }
    else if (forma === '2x'){
        // 4
        console.log("Valor sem juros de R$: " + (preco).toFixed(2))
    }
    else{
        console.log("Valor com juros de 10% R$: " + (preco * 1.1 ).toFixed(2) )
    }
}) (preco_produto, forma_pag_outro);
// Como a função anônima tem paramtros, os argumentos podem ser passados no momento da invocação da mesma.