/** Promises and Async */

let promiseNum = new Promise( (resolve, reject) => {
    const numero = parseInt(Math.random() * 100)     
    
    if (numero > 40){
        resolve(numero) // its ok: resolve
    }     
    else {
        reject(numero)  // its not ok: reject
    }   
} )
 
/** Usa-se os métodos da promise de forma semelhante a estrutura
 *  try-catch-finally para validar a promise */
promiseNum
    .then( (value) => { // método then() -> Try
        console.log('Then: ' + value)
    } )
    .catch( (error) => { // método catch() -> Catch
        console.log('Reject: ' +error)
    }) 
    .finally( () => { // método finally() -> Finally
        console.log('Finally: Finalizou')
    })

// Tornando promise async
const promiseNumAsync = new Promise( (resolve, reject) => {        
    setTimeout( () => {
            const numero = parseInt(Math.random() * 100)    
            if (numero > 80){
                resolve(numero) // its ok: resolve
            }     
            else {
                reject(numero)  // its not ok: reject
            }   
    }, 1000) // executa o bloco de código após 1000 ms (1s)
} )

promiseNumAsync
.then( (value) => { // método then() -> Try
    console.log('Then1 : ' + value)
    return value + 10
} )
// Como chamada de método, pode usar Then várias vezes e ele vai
// guardar as alterações do 'value' no contexto.
.then( (value) => {
    console.log('Then2 : ' + value)
})
.catch( (error) => { // método catch() -> Catch
    console.log('Reject: ' + error)
}) 
.finally( () => { // método finally() -> Finally
    console.log('Finally: Finalizou')
})


