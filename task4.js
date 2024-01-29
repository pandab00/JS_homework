//Родительская функция
function ElDevice(typeOfWork, power ) {
  this.type = typeOfWork,
  this.isOn = false
}

ElDevice.prototype.switchOn = function() {
  this.isOn = true;
  console.log(`Device ${this.name} is active now.`)
}

ElDevice.prototype.switchOff = function() {
  this.isOn = false;
  console.log(`Device ${this.name} is off now.`)
}


//Создаем класс приборов - лампы.
function Lamp(brand, brightness, power) {
  this.name = brand,
  this.brightness = brightness,
  this.power = power
}

Lamp.prototype = Object.create(ElDevice.prototype);

//Переопределяем классу лампы метод switchOn, чтобы он указывал дополнительно уровень яркости.
Lamp.prototype.switchOn = function() {
  this.isOn = true;
  console.log(`Device ${this.name} is active now and it brightnes is ${this.brightness}`)
}

const lamp1 = new Lamp('filips', 'level 2', 1.3);
const lamp2 = new Lamp('sumsung', 'level High', 1.6);
console.log(lamp1);
lamp1.switchOn();
console.log(lamp2);
lamp2.switchOn();


//Создаем класс приборов - консоли.

function GameConsole(brand, model, price, power) {
  this.brand = brand,
  this.model = model,
  this.price = price,
  this.power = power
}

GameConsole.prototype = Object.create(ElDevice.prototype)


//Создаем собственный метод для GameConsole

GameConsole.prototype.getPrice = function() {
  console.log(`Your price is ${this.price*0.8}`)
}

const ps5 = new GameConsole('Sony', 5, 800, 2.3);
const xBoxOne = new GameConsole('MSoft', 3, 600, 2.1);

console.log(ps5)

ps5.getPrice()


//суммируем мощность
const allPower = [];

allPower.push(ps5, xBoxOne, lamp1, lamp2);


function sumPow(arr) {
  let totalPow = 0;
  for(let i = 0; i < arr.length; i++) {
    totalPow += arr[i].power; 
  }
  console.log("Суммарная потребляемая мощность всех приборов: " + totalPow + " Вт");
}

sumPow(allPower);



