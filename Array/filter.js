const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'ipad', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 48.44, fragil: false},
]
                              // p representa cada elemento do meu array
console.log(produtos.filter(function(p){
       return false
}))
                //function  //return
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
