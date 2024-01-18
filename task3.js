// Задание 3.

// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function createAddFunction(num1) {
    return function(num2) {
      return num1 + num2;
    }
  }
  
  const addFunc = createAddFunction(4);
  const result = addFunc(11);
  console.log(result);