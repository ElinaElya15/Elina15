let salaryAmount = prompt('Введіть вашу заробітну плату, грн');
let costOfLiving = prompt('Введеть розмір прожиткового мінімуму, грн (сума більша, ніж зарплата)');

let socialAssistance = Number(costOfLiving) - Number(salaryAmount);

document.write(`
     <div>
         <p>Розмір соціальної допомоги становить: ${socialAssistance}грн.</p>
     </div>
`);