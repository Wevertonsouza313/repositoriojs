for(let letra of "mendigo"){
    console.log(letra)
}

const assuntosEma = ['Map', 'Set', 'Promisse']

for(let i in assuntosEma){
    console.log(i)
}

for(let assunto of assuntosEma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado : true}],
    ['Set', {abortado : true}],
    ['Promise', {abordado : false}]
])


for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}

for(let valor of assuntosMap.values()){
    console.log(valor)
}

for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}


