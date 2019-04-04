//usar spread com objeto

const funcionario = {nome : 'joao', idade: 18}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['Joao', 'Pedro','gloria']
const grupofinal = ['Maria','rodo', ...grupoA]
console.log(grupofinal)