const produto = Object.preventExtensions({
      nome: 'qualquer', preco: 1.99, tag: 'promocao'
})

console.log('extensivel', Object.isExtensible(produto))

produto.nome = 'borracha'
// aqui esta add um novo atributo, porem por causa do metodo prevenExtensions não vai add
produto.descricao = 'seila'
//deletando o atributo tag do produto
delete produto.tag
console.log(produto)