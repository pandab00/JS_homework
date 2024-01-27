function checkProp(prop, obj) {
  return prop in obj;
}

// Произвольный объект для проверки:
const men = {
  strong: 32
}

console.log(checkProp('strong', men))