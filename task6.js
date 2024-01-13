// Задание 6. Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

const array = [1, 1, 1, 1];
let areAllElementsEqual = true;

for (let i = 0; i < array.length; i++) {
  if (array[i] !== array[0]) {
    areAllElementsEqual = false; 
    break;
    }
}
console.log(areAllElementsEqual);