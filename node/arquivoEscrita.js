const fs = require('fs')

const produto ={
    nome: 'Celula',
    preco: '1249.99',
    desconto: 0.15
} 
                        //nome do arquivo que quero gerar
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo salvo com sucesso')
})