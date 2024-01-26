//Родительская функция
function ElDevice(typeOfWork, power ) {
  this.type = typeOfWork,
  this.power = power,
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
function Lamp(brand, brightness) {
  this.name = brand,
  this.brightness = brightness
}

Lamp.prototype = new ElDevice('electro', 4);

//Переопределяем классу лампы метод switchOn, чтобы он указывал дополнительно уровень яркости.
Lamp.prototype.switchOn = function() {
  this.isOn = true;
  console.log(`Device ${this.name} is active now and it brightnes is ${this.brightness}`)
}

const lamp1 = new Lamp('filips', 'level 2');
const lamp2 = new Lamp('sumsung', 'level High');
console.log(lamp1);
lamp1.switchOn();
console.log(lamp2);
lamp2.switchOn();


//Создаем класс приборов - консоли.

function GameConsole(brand, model, price) {
  this.brand = brand,
  this.model = model,
  this.price = price
}

GameConsole.prototype = new ElDevice('electr', 7);


//Создаем собственный метод для GameConsole

GameConsole.prototype.getPrice = function() {
  console.log(`Your price is ${this.price*0.8}`)
}

const ps5 = new GameConsole('Sony', 5, 800);
const xBoxOne = new GameConsole('MSoft', 3, 600);

console.log(ps5)

ps5.getPrice()


//суммируем мощность
const sumPower = [];

sumPower.push(ps5, xBoxOne, lamp1, lamp2);

let totalPow = 0;

for(let i = 0; i < sumPower.length; i++) {
  totalPow += sumPower[i].power;
}

console.log("Суммарная потребляемая мощность всех приборов: " + totalPow + " Вт");
