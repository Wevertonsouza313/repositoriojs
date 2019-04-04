//funcao sem retorno

function imprimirSoma(a, b){
  console.log(a + b)
}

imprimirSoma(2,3)

//funcao com retorno
function  soma(a, b = 1){
    return a + b 
}

console.log(soma(2,3))
// vai soma 2 + 1 que é de b
console.log(soma(2))
console.log(soma())
 