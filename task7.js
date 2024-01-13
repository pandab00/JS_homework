// Задание 7. Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

//Решение:

const arr = [1, 2, 3, 5, null, 'a', 0, 0];

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
  const elem = arr[i];
  if(typeof elem === 'number') {
    if(elem === 0) {
      zeroCount++;
    } else if (elem %2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
}

console.log('Количество четных элементов: ' + evenCount);
console.log('Количество нечетных элементов: ' + oddCount);
console.log('Нулевых: ' + zeroCount);