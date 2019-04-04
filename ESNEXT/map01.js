const tecnologias = new Map()
tecnologias.set('react', {framework : false})
tecnologias.set('angular', {framework : true})

*//assim não funciona
console.log(tecnologias.react)
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'funcao'],
    [{} , 'Objeto'],
    [123, 'Numero'],
])

chavesVariadas.forEach((vl, ch)=>{
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))