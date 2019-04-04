// primeiro forma de escrever funcao armazenando em variavel
let dobro = function(a){
    return 2 * a
}

// segunda(arrow) forma de escrever funcao armazenando em variavel
 dobro = (a) => {
    return 2 * a
}

// terceira(arrow) forma de escrever funcao armazenando em variavel
 dobro = a => 2 * a  //implicito
 console.log(dobro(Math.PI))

 let ola = function(){
     return 'olá'
 }
  
 ola = () => 'olá'

 ola = _ => 'olá' // possui param.

 console.log(ola())