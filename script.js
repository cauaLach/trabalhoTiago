var botao = document.getElementById("botao")
botao.addEventListener("click",() =>{
    var numeroTabuada = document.getElementById("numeroTabuada")
    var numero = parseInt(numeroTabuada.value)

    var resultadoTabuada = document.getElementById("resultadoTabuada")
    for(let i= 0; i <=10;i++){
        resultadoTabuada.innerHTML += "<p>" + (numero + "x" + i + ": "+ i*numero) + "<p>"
    }
})