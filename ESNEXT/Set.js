// nao aceita repeticao

const times = new Set()
times.add('pitanga')
times.add('pitanga').add('goiaba')
times.add('pera')

console.log(times)  
console.log(times.has('pitanga'))
times.delete('pera')
console.log(times)

const nomes = ['bruna', 'feranda', 'cristina']
const nomesSet = new Set(nomes)
console.log(nomesSet)