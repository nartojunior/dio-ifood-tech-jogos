const { gets, print } = require('./components/component01')

let maior;

maior = gets()

for (let i = 0; i< 4; i++)
{
    let num = gets()
    if (num > maior){
        maior = num
    }
}
print( maior )
print( gets() )
print( gets() )
print( gets() )
print( gets() )
print( gets() )