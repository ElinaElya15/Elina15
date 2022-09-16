let symbolNumber = 5;
let pyramid = '';
let count = 0;
for (let i = 1; i <= symbolNumber; i++) {
  for (let j = 0; j < symbolNumber - i; j++) {
    pyramid += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    pyramid += "^";
    count++;
  }
  pyramid += '\n';
}
console.log(pyramid);
