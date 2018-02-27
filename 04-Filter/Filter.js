var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 12, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 5 },
    { name: 'celery', type: 'vegetable', quantity: 7, price: 9 },
    { name: 'orange', type: 'fruit', quantity: 20, price: 14 },
  { name: 'hamburger', type: 'meat', quantity: 5, price: 25 }
  
  
  ];

var filtered = products.filter(prod => prod.type == 'fruit' && prod.quantity > 10)

filtered;

