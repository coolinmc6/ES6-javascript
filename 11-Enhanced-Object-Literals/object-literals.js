// Original
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'JavaScript', price: 15 }
]

const bookShop = createBookShop(inventory)

bookShop.inventoryValue()
bookShop.priceForTitle('Harry Potter')


function createBookShop2(inventory) {
  return {
	inventory, // if key and value are the same, you only need to list it once
    
    inventoryValue() {  // we can eliminate the function keyword and colon
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price
    }
  };
}

const inventory2 = [
  { title: 'Harry Potter', price: 10 },
  { title: 'JavaScript', price: 15 }
]

const bookShop2 = createBookShop(inventory)

bookShop2.inventoryValue()
bookShop2.priceForTitle('Harry Potter')

/// Car Example

const color = 'red';

const Car = {
  color: color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};


const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};