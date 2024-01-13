// Задание 3. Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

const str = "Hello";
const reversedString = str.split('').reverse().join('');
console.log(reversedString);