let firstNumber;
let secondNumber;

do {
   firstNumber = +prompt(`Введіть перше ціле число`);
} while (Number.isInteger(firstNumber) === false);

do {
   secondNumber = +prompt(`Введіть друге ціле число`);
} while (firstNumber >= secondNumber || Number.isInteger(secondNumber) === false);

const skipEvenNumber = confirm(`Пропускати парні числа?`);
let sumNumber = 0;
if (skipEvenNumber) {
   for (let i = firstNumber; i <= secondNumber; i++) {
      if (i % 2 === 1 && skipEvenNumber) {
         sumNumber += i;
      } 
   }
}
else {
   for (let i = firstNumber; i <= secondNumber; i++) {
      sumNumber += i;
   }
}

console.log(`Перше число ${firstNumber}`);
console.log(`Друге число ${secondNumber}`);
console.log(`Пропускати парні числа? ${skipEvenNumber}`);
console.log(`Сума чисел ${sumNumber}`);

