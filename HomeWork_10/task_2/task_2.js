// Задача 1. Створити функцію, яка за номером місяця повертає його назву.


function season (monthNumber){
    switch (monthNumber) {
      case 1:
        return "Січень";

      case 2:
        return "Лютий";

      case 3:
        return "Березень";

      case 4:
        return "Квітень";

      case 5:
        return "Травень";

      case 6:
        return "Червень";

      case 7:
        return "Липень";

      case 8:
        return 'Серпень';

      case 9:
        return "Вересень";

      case 10:
        return "Жовтень";

      case 11:
        return "Листопад";

      case 12:
        return "Грудень";

        default:
          return 'Не вірно введений місяць'
    }
    
}

let userAsk = parseFloat(prompt('Введіть номер місяця'));

let message = season(userAsk);
document.write(`${message}`);