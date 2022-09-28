/*Задача 6. Створити функцію, яка створює  
таблицю з вказаною кількістю рядків і стовпців*/



function tableCreate (rowsNum, columns){
       
         let table = '<table border="2px">';

         for (let i = 1; i < columns; i++) {
           table += "<tr>";
           for (let i = 1; i <= rowsNum; i++) {
             table += "<td></td>";
           }
           table += "</tr>"; 
         }
         table += '</table>';
         return table;
}

let rowsNum = parseInt(prompt("Введіть кількість рядків"));
let columns = parseInt(prompt("Введіть кількість стовпців"));

document.write(`${tableCreate(rowsNum, columns)}`);