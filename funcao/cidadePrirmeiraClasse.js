//criar de forma literal
function fun1(){

}

//armazenar em uma variavel
const fun2 = function(a){
    return a
}
console.log(fun2(3))

//armazenar em um array
const array = [function (a,b){ return a + b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj = {   
}
obj.falar = function() {
    return 'opa'
}
console.log(obj.falar())

//passar funcao como parametro
function run(fun){
  fun()
}
run(function (){
    console.log('executando....')
} )

//Uma função pode retornar/conter uma funcao
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

// soma(2,3)(5)
//ou assim
const somaMais = soma(2,3)
somaMais(5)