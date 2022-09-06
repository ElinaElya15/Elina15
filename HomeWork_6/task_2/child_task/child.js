let ageChild = prompt('Ведіть вік дитини (до 6 років)')

let kindergardenAge = 6 - Number(ageChild);
let schoolAge = (6 - Number(ageChild)) + 11 ;
let universage = 6 - Number(ageChild) + 11 + 5; 

 document.write(`
    <div>
        <p>Через ${kindergardenAge} років дитина закінчить відвідувати садок. </p>
        <p>Через${schoolAge} років дитина закінчить відвідувати школу. </p>
        <p>Через ${universage} років дитина закінчить відвідувати університет. </p>
    </div>
 `);