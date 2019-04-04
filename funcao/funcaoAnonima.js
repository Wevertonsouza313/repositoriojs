const soma = function(x, y){
   return x + y
}
                                        //operacao recebe a operacao da funcao soma
const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma)

imprimirResultado(3,4, function(x, y){
    return x - y;
})

imprimirResultado(3,4, (x,y)=> x * y)

const pessoa = {
    //atributo
    falar : function(){
        console.log('opá')
    }
}

pessoa.falar()