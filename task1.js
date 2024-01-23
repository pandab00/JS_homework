// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const getOwnKeys = function(obj) {
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      console.log(key);
    }
  }
}

// Создаем произвольный объект для проверки:

const men = {
  strong: 32
}

getOwnKeys(men);
