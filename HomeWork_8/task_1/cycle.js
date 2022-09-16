for (let letter = 0; letter < 20; letter++) {
  document.write("o");
}




let letter_o = 1;
document.write('<br>');
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < letter_o; j++) {
    document.write('o');
  }
  letter_o += 1;
  document.write("<br>");
}




let count = 6;
for (let i = 1; i <= count; i++) {
    for (let j = 0; j < count - i; j++) {
      document.write("&nbsp&nbsp");
    }

    for (let k = 0; k < i; k++) {
      document.write("o");
    }
    document.write("<br>");
} 




document.write('<br>')
for (let i = 8; i > 0; i--) {
  for (let j = 0; j < i; j++) {
      if (i === 3) {
        document.write(".");
      }else {
        document.write("o");
      }
  }
  document.write("&nbsp&nbsp");
  document.write("<br>");
}
document.write("<br>");





for(let i = 0; i < 3; i++) {
    for (let j = 1; j < 8; j++) {
      document.write("<br>");
      for (let k = 0; k < j; k++) {
        document.write("o");
      }
    }
}
document.write("<br>");



document.write("<br>");
 for (let i = 0; i < 7; i++) {
   document.write(`
     <li> 
       Пункт ${i + 1} 
     </li> `);
 }



 document.write("<br>");
  document.write("<ol>")
 for (let i = 0; i < 7; i++) {
  document.write(`
     <li> Пункт ${i + 1} </li>
     `);
 }
  document.write("</ol>");
