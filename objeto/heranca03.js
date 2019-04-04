const pai = { nome: 'Pedro', corCabelo: 'preto'}
// aqui eu disse que filha1 recebe atributos e valor do pai
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome: {value: 'bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome ='carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)