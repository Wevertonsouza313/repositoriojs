const notas = [6, 8, 9, 11]

for (let i = 0; i < notas.length; i++){
    console.log(`valores : ${notas[i]}`)
}

for(let i in notas){
    console.log(i + ' = ' + notas[i])
}

//trabalhando com objeto
const pessoa = {
    nome: 'Ana',
    sobrenome: 'ri',
    idade: 29,
    peso: 80
}
    // esse atributo pega nome, sobrenome etc..
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}