const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancodedados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id)) 
})
app.post('/produtos', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome:   req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // esse aqui vai json 
})
app.delete('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto) // esse aqui vai json 
})

app.post('/produtos', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome:   req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // esse aqui vai json 
})
app.listen(porta, ()=>{
    console.log(`servidor executando a porta ${porta}.`)
})


