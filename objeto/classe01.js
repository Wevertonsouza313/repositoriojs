class Lancamento{
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class Ciclofinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.Lancamentos = []
    }
     //funcao que recebe 1 ou mas lancamentos
    addLancamentos(...Lancamentos){
                    //foreach no lancamento que passou no paramentro, concatena em um array
        Lancamentos.forEach(l => this.Lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.Lancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaLuz = new Lancamento('Luz', -220)

const contas = new Ciclofinanceiro(6, 2018)

contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())