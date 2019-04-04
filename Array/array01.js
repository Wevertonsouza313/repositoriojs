let aprovados = new Array('Bia', 'Maria', 'jose')
console.log(aprovados)

aprovados = ['Bia', 'Maria', 'jose']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'paulo'
aprovados.push('abia')

console.log(aprovados.length)
console.log(aprovados)
//order o array
aprovados.sort()
console.log(aprovados)

aprovados = ['roberto', 'giu', 'mica']
//excluindo e add informações no array
aprovados.splice(1,2, 'Elemento1', 'Elemento2')
console.log(aprovados)