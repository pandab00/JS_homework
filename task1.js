
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
