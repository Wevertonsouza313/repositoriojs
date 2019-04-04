// novo resursodo ES2015

const pessoa ={
    nome: 'ana',
    idade: 50,
    endereco : {
        logradouro: 'rua abc',
        numero : 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const{nome: n, idade: i} = pessoa
console.log(n,i)

//aqui alem de acessar os atributos do endereco eu add o cep como atributo
const { endereco: {logradouro, numero , cep = 4} } = pessoa
console.log(logradouro, numero , cep)

