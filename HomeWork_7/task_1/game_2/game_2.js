let userNumber = parseFloat(prompt('Введіть число від 1 до 5'))

let min = Math.ceil(1);
let max = Math.floor(5);
let generateNumber = Math.floor(Math.random() * (max-min) + min);

console.log(generateNumber, userNumber);

if(userNumber === generateNumber) {
 document.write('Вітаємо, ви відгадали число!');
} else {
    userNumber = parseFloat(
      prompt("Спробуйте знову: Введіть число від 1 до 5")
    );
  if(userNumber === generateNumber) {
    document.write('Вітаємо ви відгадали з другої спроби.')
  }else {
      document.write("На жаль, не відгадали. Наступного разу пощастить.");
  }
}


