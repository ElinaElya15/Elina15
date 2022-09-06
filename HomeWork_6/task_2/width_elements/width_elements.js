let screenWidth = prompt('Ведіть ширину екрана');
let numberofElements = prompt('Введіть кількість елементів');

let widthOfElements = Math.floor(
  Number(screenWidth) / Number(numberofElements)
);

document.write(`
     <div>
         <p>Ширина елементів, які повинні бути у рядку становить:${widthOfElements} px</p>
     </div>
`);