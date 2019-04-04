class avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends avo{
     constructor(sobrenome, profissão = 'mecanico'){
         //vai chamar o construtor do avo
         super(sobrenome)
         this.profissão = profissão
     }
}

class Filho extends pai{
    constructor(){
        //vai chamar o construto do pai
        super('Silva')
    }
}

const filho = new Filho()
console.log(filho)