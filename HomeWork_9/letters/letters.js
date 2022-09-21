let ukrLetter = prompt('Введіть букву українського алфівіту');
switch(ukrLetter){
    case 'а':
    case 'е':
    case 'є':
    case 'и':
    case 'і':
    case 'ї':
    case 'о':
    case 'у':
    case 'ю':
    case 'я':
        document.write('Ця буква є голосною.') 
        break
    case 'б':
    case 'в':
    case 'г':
    case 'ґ':
    case 'д':
    case 'ж':
    case 'з':
    case 'й':
    case 'к':
    case 'л':
    case 'м':
    case 'н':
    case 'п':
    case 'р': 
    case 'с': 
    case 'т':
    case 'ф': 
    case 'х': 
    case 'ц':
    case 'ч': 
    case 'ш': 
    case 'щ':
        document.write('Ця буква є приголосною.')
        break
    case 'ь':
        document.write('Ця буква є помякшуючою для приголосних букв.')
        break
        default:
        document.write('Ви ввели щось невірно, спробуйте ще раз')
}