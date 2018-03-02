// the rest operator is used to gather variables
// Rest Operator

const addNumbers = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
}

var total = addNumbers(1,2,3,4,5)

// Spread Operator
const defaultColors = ["red", "green"];
const userFavoriteColors = ['orange', 'yellow'];

defaultColors.concat(userFavoriteColors)

// I don't need to use concat AND I can add single items as well
var array = [...defaultColors, ...userFavoriteColors, "blue"];

console.log(array)


// Spread and Rest operator
function validateShoppingList(...items) {
  if(items.indexOf('milk') < 0) {
    return [...items, 'milk'];
  }
  return items;
}

var newList = validateShoppingList('oranges', 'bread', 'eggs');
console.log(newList)