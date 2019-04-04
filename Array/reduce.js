const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'ipad', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 48.44, fragil: false},
]

const resultado = produtos.map(a => a.preco).reduce(function(acumulador, vlAtual){
    console.log(acumulador,vlAtual)
    return acumulador + vlAtual
})

console.log(resultado.toFixed(2))