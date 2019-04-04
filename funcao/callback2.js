const notas = [1.1, 5.3, 8.8, 7.7, 9.5]

//sem callback
const notasBaixas1 = []

for(let i in notas){
    if(notas[i]< 7 ){{
               /// pega dados da notas[i] e passa para notasBaixas
      notasBaixas1.push(notas[i])
    }}
}

console.log(notasBaixas1)

//com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

// usando a funcao arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
