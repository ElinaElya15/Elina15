let weightOfKilo = prompt("Введіть вагу помідорів, кг");
let priceOfKilo = prompt("Введіть вартість помідорів, кг");

let priceResult = Number(weightOfKilo) * Number(priceOfKilo);

document.write(`
  <div>
      <p>Загальна вартість помідорів: ${priceResult}</p>
  </div>
`);
