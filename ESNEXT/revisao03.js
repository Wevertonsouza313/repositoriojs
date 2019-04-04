const obj = {a: 1, b: 2 , c: 3}

console.log(Object.values(obj))
console.log(Object.entries(obj))

//melhoria anotacao literal

const nome = 'carla'
const pessoa = {
    nome,
    ola(){
     return 'oi gente'
    }
}

console.log(pessoa.nome)
console.log(pessoa.ola())

//class
class Animal {}

class cachorro extends Animal{
    falar(){
     return 'aU'
    }
}

console.log(new cachorro().falar())