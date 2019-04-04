const aprovados = ['Rob', 'batm', 'godzila', 'rodolfo']
          
           // para cada elemento vai ser chamada a função
                          //primeiro parametro é o nome, segundo é indice, e o terceiro é o proprio array
aprovados.forEach(function(nome, indice){ 
    console.log(`${indice + 1}-- ${nome}`)
})
    

aprovados.forEach(nome => console.log(nome))

//armazenando em uma variavel
const exibirAprovados = aprovados => console.log(aprovado)
aprovados.forEach(exibirAprovados)