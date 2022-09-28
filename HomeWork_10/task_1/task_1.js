//  Створити функцію, яка за номером місяця повертає
//  пору року, до якої відноситься цей місяць.

function season (monthNumber){
    switch (monthNumber) {
      case 12:
      case 1:
      case 2:
        return "Пора року: зима";
      case 3:
      case 4:
      case 5:
        return "Пора року: весна";
      case 6:
      case 7:
      case 8:
        return "Пора року: літо";
      case 9:
      case 10:
      case 11:
        return "Пора року: осінь";

      default:
        return " Не вірно вказане число";
    }
}

let ask = parseFloat(prompt("Введіть номер місяця(від 1 до 12)"));

let message = season(ask);
document.write(`${message}`);




