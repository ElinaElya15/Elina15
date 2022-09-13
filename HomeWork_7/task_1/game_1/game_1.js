let numberEmotion = parseFloat (prompt('Введіть значення з меню (від 1 до 3)'));

if (numberEmotion == 1) {
document.write('😊');
} else if (numberEmotion == 2) {
document.write('😔');
} else if (numberEmotion == 3) {
document.write('😡');
} 
else{
    (numberEmotion>3)
    document.write(`Такого значення немає, спробуйте ще раз.`);
}
