const valor = 'global'

function minhaFuncao(){
    //aqui vai imprimir global
    console.log(valor)
}

function exec(){
    const valor = 'local'
    minhaFuncao()
}

exec()