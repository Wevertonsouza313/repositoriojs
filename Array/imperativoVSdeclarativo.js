const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'ipad', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 48.44, fragil: false},
]

//imperativo
let total1 = 0
let media = 0

   for(let i = 0; i < produtos.length; i++){
       total1 += produtos[i].preco
       media += total1
   }

   console.log(media)

   // declarativo
   const getPreco = produt => produt.preco
   const soma = (total, atual) => total + atual
   const total2 = produtos.map(getPreco).reduce(soma)
   console.log('r = ' + produtos.map(getPreco))
   console.log(total2 / produtos.length) 