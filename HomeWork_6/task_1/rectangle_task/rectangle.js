let firstSide = prompt('Введіть першу сторону прямокутника,см');
let secondSide = prompt('Введіть другу сторону прямокутника,см');

let perimeterResult = (Number(firstSide) + Number(secondSide)) * 2;
let areaResult = Number(firstSide) * Number(secondSide);

document.write(
  `<div>
      <p>Площа прямокутника: ${areaResult} </p>
      <p>Периметр прямокутника: ${perimeterResult}</p>
   </div>`
);
