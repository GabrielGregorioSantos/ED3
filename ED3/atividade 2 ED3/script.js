function exibirNumero() {
    var numero = document.getElementById("numeroInput").value;
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerText = "O número informado foi " + numero + ".";

  }