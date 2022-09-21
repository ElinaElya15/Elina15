let numberOfMonth = parseFloat(prompt('Введіть номер місяця (від 1 до 12)'))
switch(numberOfMonth){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.write('У цьому місяці 31 день');
        break
    case 4:
    case 6:
    case 9:
    case 11:
        document.write('У цьому місяці 30 днів');
        break
    case 2:
        document.write('У 2023 році у цьому місяці 28 днів')
        break
        default:
        document.write('Такого місяця не знайдено, спробуйте ще раз');
}