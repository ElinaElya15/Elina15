let categoryRace = prompt('Введіть свою категорію водіння транспортним засобом (A,B чи C)');
switch (categoryRace){
    case 'A':
         document.write('Мотоцикл')
    break
    case 'B':
         document.write('Автомобіль')
    break
    case 'C':
        document.write('Вантажівка')
    break
    default:
    document.write('Невірна категорія')
}
