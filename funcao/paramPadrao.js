//estrategia para gerar valor padrao
    function soma1(a, b, c){
             //ou
        a = a || 1
        b = b || 1
        c = c || 1
        return a + b +c
    }

    console.log(soma1(2))

    //estrategia 2, 3, 4, para gerar valor padrao
    function soma2(a, b, c){
        // se a for diferente de underfined eu passo valor de a senao recebe 1
    a = a !== undefined ? a : 1
    b = b in arguments ? b : 1      
    // se o c não for numero retorne o valor padrão, se não retorne 11
    c = isNaN(c) ? 1 : c
    return a + b + c

    }

    console.log(soma2(2))

//valor padrao do E2015
function soma3(a = 1, b = 1, c = 1){

  return a + b + c

}
console.log(soma3() , soma3(3), soma3(1,2,3))
