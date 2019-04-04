const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'ipad', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 48.44, fragil: false},
]

// desafio 01: todos os produto são frageis ?       //condicao retorna false ou true
const todosSaoFrageis = (resultado,frageis) => resultado && frageis 
console.log(produtos.map(a => a.fragil).reduce(todosSaoFrageis))

//Desafio 02: algum produto é fragil ?
const AlgumFragil = (resultado,frageis) => resultado || frageis 
console.log(produtos.map(a => a.fragil).reduce(AlgumFragil))