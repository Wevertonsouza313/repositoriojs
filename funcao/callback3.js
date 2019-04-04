//exemplo de callback no browser
//quando usuário clicar no corpo da pagina aciona e chama a funcao
document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('o evento ocorreu')
}