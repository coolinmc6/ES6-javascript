var colors = ['red', 'blue', 'green'];

colors.forEach((color) => {
  console.log(color);
});



// forEach

var numbers = [1,2,3,4,5,6]

var sum = 0;


var adder = (number) => sum += number;

numbers.forEach(adder)
                
sum