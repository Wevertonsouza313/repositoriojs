//funcao factory
function criarSalario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarSalario('joao', 7980, 4)
const f2 = criarSalario('maria', 11400, 1)

console.log(f1.getSalario(), f2.getSalario())


//object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

//um funcao famosa que retorna obj
const fromJSON = JSON.parse('{"info": "Sou um json"}')
console.log(fromJSON.info)