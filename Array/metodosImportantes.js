const pilotos = ['aa' , 'bb' , 'cc' , 'dd']

pilotos.pop() // remove ultimo elemento
console.log(pilotos)

pilotos.push('jj') // adiciona elemento
console.log(pilotos)

pilotos.shift() // remove primeiro elemento
console.log(pilotos)

pilotos.unshift('II') // adiciona na primeiro posicao
console.log(pilotos)

//splice pode add e remov elementos

//adicionar
pilotos.splice(2,0, 'PP', 'ÇÇ')
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)

const algPilots = pilotos.slice(2) //novo arrary
console.log(algPilots)
                           //a oarti do indice 1 até indice 4, mas nao add o indice 4
const algPilots2 = pilotos.slice(1,4) //novo arrary
console.log(algPilots2)