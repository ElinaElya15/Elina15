let pointExam = parseFloat(prompt('Введіть оцінку за екзамен (від 1 до 5)'))
switch (pointExam) {
  case 1:
    document.write("Незадовільно");
    break;
  case 2:
    document.write("Незадовільно");
    break;
  case 3:
    document.write("Задовільно");
    break;
  case 4:
    document.write("Добре");
    break;
  case 5:
    document.write("Відмінно");
    break;
    default:
    document.write("Такої оцінки немає, спробуйте ще раз.");    
}