var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

computers.some(comp => comp.ram > 16) 	// true
computers.every(comp => comp.ram > 16)	// false


  