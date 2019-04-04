//operador rest
function total(...numeros){
    let total = 0
                    //funcao interna
    numeros.forEach(n => total += n)

    return total
}

console.log(total(2,4,6,11))