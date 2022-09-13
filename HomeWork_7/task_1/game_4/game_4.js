let userNumber1 = parseFloat(prompt('Учасник 1. Введіть число від 1 до 10'))
let userNumber2 = parseFloat(prompt("Учасник 2. Введіть число від 1 до 10"));

let min = Math.ceil(1);
let max = Math.floor(10);

let generateNumber = Math.floor(Math.random() * (max - min) + min);

if (Math.abs(userNumber1 - generateNumber) < Math.abs(userNumber2 - generateNumber)){
    document.write(`Виграв Учасник 1, згенероване число: ${generateNumber}`);
}
else if (Math.abs(userNumber1 - generateNumber) > Math.abs(userNumber2 - generateNumber)){
    document.write(`Виграв Учасник 2, згенероване число: ${generateNumber}`);
}else{
    document.write(`Нічия, згенероване число: ${generateNumber}`);
}