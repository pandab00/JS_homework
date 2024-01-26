class ElDevice{
    constructor(typeOfWork = 'electro') {
      this.typeOfWork = typeOfWork;
      this.isOn = false;
    }
    
   switchOn() {
     this.isOn = true;
    console.log(`Device ${this.name} is active now.`)
   }
    
    switchOff() {
     this.isOn = false;
    console.log(`Device ${this.name} is off now.`)
   }
    
  }
  
  class Lamp extends ElDevice {
    constructor(brand, power, brightness, typeOfWork) {
      super(typeOfWork);
      this.brand = brand;
      this.power = power;
      this.brightness = brightness;
    }
    
    switchOn() {
      this.isOn = true;
      console.log(`Device "${this.brand}" is active now and it brightness is ${this.brightness}`)
    }
    
  }
  
  const lamp1 = new Lamp('sumsung', 1.3, 'low');
  const lamp2 = new Lamp('apple', 1.1, 'high');
  
  lamp1.switchOn()
  
  
  class GameConsole extends ElDevice {
    constructor(brand, power, model, typeOfWork) {
      super(typeOfWork);
      this.brand = brand;
      this.power = power;
      this.model = model;
    }
    
    getModel() {
      console.log( this.model +' - the last model of our product!')
    }
  }
  
  
  const ps5 = new GameConsole('Sony', 2.3, 5);
  const xBox = new GameConsole('MicroSoft', 2.2, 'One');
  
  xBox.getModel();
  
  //power
  
  const sumPower = [];
  
  sumPower.push(xBox, ps5, lamp1, lamp2);
  
  let totalPower = 0;
  
  for(let i = 0; i < sumPower.length; i++) {
    totalPower += sumPower[i].power;
  }
  
  function sumPow() {
    console.log("Суммарная потребляемая мощность всех приборов: " + totalPower + " Вт");
  }