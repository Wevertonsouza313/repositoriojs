//par nome / valor
const saudacao = 'valor' // contexto lexico 1

function exec(){
    const saudacao = 'fallaaa'  //contexto lexico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 80,
    endereco: {
        logrado: 'rua miguel',
        numero: '123'
    }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)