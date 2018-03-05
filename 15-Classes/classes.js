// ES5
function Car(options) {
  this.title = options.title;
  
}

Car.prototype.drive = function() {
  return 'vroom';
};


function Toyota(options) {
 Car.call(this, options);
 this.color = options.color; 
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;
Toyota.prototype.honk = function() {
  return 'beep'
};

const car = new Toyota({color: 'red', title: 'Daily Driver'});
car;

car.honk();
car.drive();


// ES6
class Car {
  constructor({title}) {
    this.title = title
  }
	drive() {
   return 'vroom' 
  }

};


class Toyota extends Car {
  constructor(options) {
    super(options);		// Car.constructor()
    this.color = options.color;
  }
  
  honk() {
    return 'beep';
  };
}

const toyota = new Toyota({color: 'red', title: 'CMs Car'});
toyota.honk()


toyota.drive();