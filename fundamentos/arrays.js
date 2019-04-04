const valores = [7.7, 8.9, 6.3, 7.5]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)
//coloca valor no array
valores.push({id: 3}, false, null, 'tset')
console.log(valores)

//tira valor do array tset   
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)