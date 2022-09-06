let readOnePage = prompt('Введіть за скільки хвилин прочитується 1 сторінка книжки');
let amountPagesBook = prompt('Введіть скільки сторінок у книжці');

let convert = Number(readOnePage) / 60;
let hoursReadbook = Math.floor (convert * Number(amountPagesBook));

document.write(`
     <div>
         <p>Книжка буде прочитана за ${hoursReadbook} годин</p>
     </div>
`);





