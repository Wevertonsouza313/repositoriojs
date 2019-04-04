const peso1 = 123.456
const peso2 = Number('2.0')

console.log(peso1, peso2)
//verificando se é inteiro a variavel
console.log(Number.isInteger(peso1))
// essa funcao fixa em 1 casa
console.log(peso1.toFixed(1))
// convertendo para string
console.log(peso2.toString(2))