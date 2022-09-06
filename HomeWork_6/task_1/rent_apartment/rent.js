let rentApartmentMonth = prompt('Введіть орендна плата за квартиру (за 1 місяць)');

let rentApartmentYear = Number(rentApartmentMonth) * 12;
let rentApartment_2Year = Number(rentApartmentMonth) * 24;
let rentApartment_10Year = Number(rentApartmentMonth) * 120;

document.write(`
 <div>
         <p>Орендна плата за квартиру за 1 рік: ${rentApartmentYear}</p>
         <p>Орендна плата за квартиру за 2 роки: ${rentApartment_2Year}</p>
         <p>Орендна плата за квартиру за 10 років: ${rentApartment_10Year}</p>
     </div>
`);
