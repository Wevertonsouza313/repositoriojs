const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>parabens. Usuário incluido</h1>')
})

app.post('/usuarios/3', (req, resp) => {
    console.log(req.params.id)
    resp.send('<h1>parabens. Usuário Alterado!</h1>')
})

app.listen(3003)