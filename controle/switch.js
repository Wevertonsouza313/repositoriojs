const imprimirResultado = function(nota){
    //math.floor quer dizer arrendonda pra baixo
    switch(Math.floor(nota)){
        case 10:
        case 9:
           console.log('quadro de honra')
           break;
        case 8: case 7:
           console.log('aprovado')

        case 6: case 5: case 4:
           console.log('recuperação')

        case 3: case 2: case 1:
           console.log('reprovado')
           
        
        default:
        console.log('nota invalidade')


    }

}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)