class Comment {
  constructor(content, children) {
 		this.content = content;
    this.children = children
  }
  
  // * => we're about to create a generator
  // brackets => to place our Symbol.iterator key
  // and then we place our parens which is the upgraded object literal syntax
  // array helpers do not work inside generators
  *[Symbol.iterator]() {
    yield this.content;
    for(let child of this.children) {
    	yield* child  
    }
  }
}

const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []), 
  new Comment('meh', [])
];

const tree = new Comment('Great Post!', children);

const values = [];
for (let value of tree) {
  values.push(value) 
}
values