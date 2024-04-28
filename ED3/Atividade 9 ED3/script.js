function converterParaCelsius() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    var celsius = 5 * ((fahrenheit - 32) / 9);
    document.getElementById("resultado").innerText = fahrenheit + "°F equivalem a " + celsius.toFixed(2) + "°C.";
  }