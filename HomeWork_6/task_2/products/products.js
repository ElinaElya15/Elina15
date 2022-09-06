let weightOfApple = prompt('Введіть вагу яблук,кг');
let priceOfApple = prompt('Введіть вартість яблук за 1кг');

let weightOfbutter = prompt('Введіть вагу масла,кг');
let priceOfButter = prompt ('Ведіть вартість масла за 1кг')

let totalpriceApple = Number(weightOfApple) * Number(priceOfApple);
let totalPriceButter = Number(weightOfbutter) * Number(priceOfButter);

document.write(`
    <div>
        <p>Загальна вартість яблук:${totalpriceApple}</p>
        <p>Загальна вартість масла:${totalPriceButter}</p>
    </div>
`);