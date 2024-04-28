function calcularSalario() {
    var salarioPorHora = parseFloat(document.getElementById("salarioPorHora").value);
    var horasTrabalhadas = parseInt(document.getElementById("horasTrabalhadas").value);
    var salarioTotal = salarioPorHora * horasTrabalhadas;
    document.getElementById("resultado").innerText = "Seu salário total no mês é: R$ " + salarioTotal.toFixed(2);
  }