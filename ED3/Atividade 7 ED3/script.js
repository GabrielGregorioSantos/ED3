function calcularAreaEDobro() {
    var lado = parseFloat(document.getElementById("lado").value);
    var area = lado * lado;
    var dobroDaArea = 2 * area;
    document.getElementById("resultado").innerText = "A área do quadrado é: " + area.toFixed(2) + ". O dobro da área é: " + dobroDaArea.toFixed(2);
  }