const pessoa = {
    saudacao: 'bom dia',

    // objetvo pessoa recebendo um funcao
    falar(){
        console.log(this.saudacao)
    }
}


pessoa.falar()
const falar = pessoa.falar()

//falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
