/* Importanto e Exportando */

//const functions = require('./ex08_import_export_aux')
//console.log(functions)

// O nome funciona como espécie de namespace da exportação.
const { gets, print } = require('./ex08_import_export_aux')

print(  gets()  )


const pessoa = { nome: 'narto'}
const { nome } = pessoa
//const nome = pessoa