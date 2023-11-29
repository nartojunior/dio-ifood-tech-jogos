function gets(){

    return 10
}

function print(texto){
    console.log(texto)
}

module.exports = { 
    gets : gets, 
    print: print
}
/* Como os nomes são os mesmos, não precisa indicar identificador para o membro.
module.exports = { 
    gets : gets, 
    print: print
}*/