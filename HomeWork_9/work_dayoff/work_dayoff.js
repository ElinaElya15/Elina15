let dayWeek = parseFloat(prompt('Введіть день тижня (від 1 до 7)'))
    switch (dayWeek) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            document.write('Робочий')
        break
        case 6:
        case 7:
            document.write('Вихідний')
        break
        default:
        document.write('Не вірний номер')
    }