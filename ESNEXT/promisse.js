function falarDepoisDe(segundos, frase){
                      //resolvido atendido  -- reject quando quero rejeitar
    return new Promise((resolve, reject) => {
        // simular um delay, tempo de processamento
        setTimeout(() => {
            resolve(frase)
            // tempos segundos
        }, segundos * 1000)
   })
}

falarDepoisDe(3, 'Que legal').then(frase => frase.concat('?1?')).then(outraFrase =>
     console.log(outraFrase)).catch(e => console.log(e))