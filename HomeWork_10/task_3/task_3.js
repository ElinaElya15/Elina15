// Створити функцію, яка за номером тижня 
// повертає кількість уроків(так, як у вас було у школі).


function lessonCount (week){
    switch (week) {
      case 1:
        return "У понеділок 7 уроків";
      case 2:
        return "У вівторок 6 уроків";
      case 3:
        return "У середу 8 уроків";
      case 4:
        return "У четвер 5 уроків";
      case 5:
        return "У п'ятницю 6 уроків";
      case 6:
      case 7:
        return 'Це вихідний, уроків немає.'

        default:
        return "Не вірно вказаний номер тижня";
   
    }
}

let weekNumber = parseFloat(prompt("Введіть номер тижня (від 1 до 7)"));

let message = lessonCount(weekNumber);
document.write(`${message}`)