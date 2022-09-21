let sidePolygon = parseFloat(prompt('Введіть кількість сторонін багатокутника')) 
switch (sidePolygon) {
  case 3:
    document.write("Фігура: трикутник");
    break;
  case 4:
    document.write("Фігура: чотирикутник");
    break;
  case 5:
    document.write("Фігура: пятикутник");
    break;
  case 6:
    document.write("Фігура: шестикутник");
    break;
  default:
    document.write("Такого багатокутника немає, спробуйте ще раз");
}