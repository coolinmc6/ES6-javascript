var numbers = [10,20,30];
// ES6
var total = numbers.reduce((acc, num) => acc + num);
// ES5
var total2 = numbers.reduce(function(acc, sum) {
  return sum + acc;
},0);
total
total2

var primaryColors = [
  { color: "red" },
  { color: "yellow" },
  { color: "blue" }
];

var colors = primaryColors.reduce(function(previous, color) {
  previous.push(color.color);
  return previous;
}, [])
colors


function balancedParens(string) {
	return !string.split("").reduce(function(previous, char) {
    if(previous < 0) { return previous; }
    if( char == "(") { return ++previous; }
    if( char == ")") { return --previous; }
    return previous;
  }, 0);
}

balancedParens("()()");


var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce((acc,obj) => {
    return acc + obj.distance  
}, 0)



var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previous, desk) {
    desk.type == 'sitting' ? previous.sitting++ : previous.standing++;
    return previous;
}, { sitting: 0, standing: 0 });


function unique(array) {
  return array.reduce((previous, num) => {
      if(previous.find(item => item == num)) {
          // do nothing
      } else {
          previous.push(num);
      }
      return previous;
  },[])
}