function criarPessoa(nome,idade){
    return {
        nome,
        idade,
        desconto: 0.1
    }
}

console.log(criarPessoa('roberto', 55))
console.log(criarPessoa('roberto', 55))

const pessoa1 = criarPessoa('roberto')

console.log(pessoa1)