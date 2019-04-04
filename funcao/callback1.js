const fabricantes = ["Mercedes", "audi", "fusca"]

function imprimir(nome, indice){
    console.log(`${indice + 1} :: ${nome}`)
}

// para cada elementro o forEach vai ser chamado a funcao imprimir
            // dois paramentros o forEach tem o nome e o indice
fabricantes.forEach(imprimir)   

fabricantes.forEach(function(a){
     console.log('Chamado' + a)
})
fabricantes.forEach(fabricante => console.log(fabricante))