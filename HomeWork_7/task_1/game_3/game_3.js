let userNumber = parseFloat(prompt('Введіть число від 1 до 100'));

let min = Math.ceil(1);
let max = Math.floor(100);
let generateNumberFirst = Math.floor(Math.random() * (max - min) + min);
let generateNumberLast = Math.floor(Math.random() * (max - min) + min);


if (generateNumberFirst === generateNumberLast) {
    generateNumberFirst = Math.floor(Math.random() * (max - min) + min);
    generateNumberLast = Math.floor(Math.random() * (max - min) + min);
}

if (generateNumberFirst > generateNumberLast){
    let temp = generateNumberFirst;
    generateNumberFirst = generateNumberLast;
    generateNumberLast = temp;
}

if (userNumber >= generateNumberFirst - 10 && userNumber <= generateNumberLast + 10){
    document.write(`Вітаємо, ви попали у проміжок, згенероване число: ${generateNumberFirst} - ${generateNumberLast}`)
}else{
    document.write(`На жаль, ви не попали у проміжок, згенероване число: ${generateNumberFirst} - ${generateNumberLast}`);
}