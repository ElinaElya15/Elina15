let yearOfBirth = prompt('Введіть рік народження учня');

let ageStudent = 2022 - Number(yearOfBirth);

document.write(`
 <div>
        <p>Вік учня у 2022 році: ${ageStudent}</p>
    </div>
`);