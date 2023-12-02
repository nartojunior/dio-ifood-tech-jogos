/** Usando Promises para manipular arquivos */

const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname + '/db_file', 'tarefas.csv')

// fs.readFile // Versão antiga do Node

// * Usando direramente o valor relativo do caminho do arquivo.
// * Se for usar o node na pasta raiz do arquivo .js
//const promiseFile = fs.promises.readFile('./db_file/tarefas.csv')

// * Usando a resolução da biblioteca 'path' para o caminho do arquivo.
const promiseFile = fs.promises.readFile(filePath)

promiseFile
    .then( (arquivo) => arquivo.toString('utf8') )
    .then( (textoCsv) => textoCsv.split('\n').slice(1) )
    .then( (linhasNoHeader) => linhasNoHeader.map( (linha) =>{
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito === 'true'
            }
        }) 
    )
    .then( (listaTarefas) => { console.log(listaTarefas) })
    .catch( (error) => { console.log('Error: ' + error) } )

/** Com Async e Await */

// açucar sintático
async function  buscarArquivo(){
    try{ //then
        const arquivo = await fs.promises.readFile(filePath)
        const textoArquivo = arquivo.toString('utf8')
        console.log(textoArquivo)
    }
    catch (error) // Catch
    {
        console.log('Catch: ' + error)
    }
    finally{ // Finally
        console.log('Finally: finalizou!')
    }
}

// retorna uma Promise<void>
buscarArquivo()

