//esse var sobresai pq é global
var numero = 1
{
    var numero = 2
    console.log('Var dentro = ' , numero)
}
console.log('Var fora =', numero)

// esse let mesmo sendo global o valor de retorno é diferente
//caso declado dentro de um bloco
let numero2 = 1
{
    let numero2 = 3
    console.log('let dentro = ' , numero2)
}
console.log('let fora =', numero2)
