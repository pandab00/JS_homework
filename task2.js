function checkProp(prop, obj) {
  return obj.hasOwnProperty(prop);
}

// Произвольный объект для проверки:
const men = {
  strong: 32
}

console.log(checkProp('strong', men))