function calcularRiesgo() {
  const balance = Number(document.getElementById("balance").value);
  const risk = Number(document.getElementById("risk").value);
  const reward = Number(document.getElementById("reward").value);

  const resultado = document.getElementById("resultado");

  if (!balance || !risk || !reward) {
    resultado.innerHTML = "Completa todos los campos.";
    return;
  }

  const riesgoDinero = balance * (risk / 100);
  const gananciaPotencial = riesgoDinero * reward;

  resultado.innerHTML = `
    Riesgo por operación: $${riesgoDinero.toFixed(2)}<br>
    Ganancia potencial: $${gananciaPotencial.toFixed(2)}
  `;
}