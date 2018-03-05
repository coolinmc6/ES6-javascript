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