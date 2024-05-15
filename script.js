var botao = document.getElementById("botao")
botao.addEventListener("click",() =>{
    var numeroTabuada = document.getElementById("numeroTabuada")
    var numero = parseInt(numeroTabuada.value)

    var resultadoTabuada = document.getElementById("resultadoTabuada")
    for(let i= 0; i <=10;i++){
        resultadoTabuada.innerHTML += "<p>" + (numero + "x" + i + ": "+ i*numero) + "<p>"
    }
})

var botao02 = document.getElementById("botao02")
botao02.addEventListener("click", () => {
    var valorA = document.getElementById("A")
    var valorB = document.getElementById("B")
    var valorC = document.getElementById("C")

    var a = parseInt(valorA.value)
    var b = parseInt(valorB.value)
    var c = parseInt(valorC.value)

    var delta = (b * b) - 4 * (a * c)
    var bascara1 = ((0 - b) + Math.sqrt(delta))/(2*a)
    var bascara2 = ((0 - b) - Math.sqrt(delta))/(2*a)

    var resultadoBascara = document.getElementById("resultadoBascara")
    resultadoBascara.innerHTML += "<p>"+ ("X¹: " + bascara1 + ", X²: " + bascara2) + "</p>"
})