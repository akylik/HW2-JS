let firstNumber;
let secondNumber;

do {
   firstNumber = +prompt(`Введіть перше ціле число`);
} while (!Number.isInteger(firstNumber));

do {
   secondNumber = +prompt(`Введіть друге ціле число`);
} while (firstNumber >= secondNumber || !Number.isInteger(secondNumber));

const skipEvenNumber = confirm(`Пропускати парні числа?`);
let sumNumber = 0;
for (let i = firstNumber; i <= secondNumber; i++) {
   if (skipEvenNumber && i % 2 === 0) {
      continue;
   }
   sumNumber += i;
}

console.log(`Перше число ${firstNumber}`);
console.log(`Друге число ${secondNumber}`);
console.log(`Пропускати парні числа? ${skipEvenNumber}`);
console.log(`Сума чисел ${sumNumber}`);

