function converterParaFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("resultado").innerText = celsius + "°C equivalem a " + fahrenheit.toFixed(2) + "°F.";
  }