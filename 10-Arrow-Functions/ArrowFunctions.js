const add = (a, b) => a + b;

// One Argument does NOT need parens around the num after the equals
const double = num => num * 2;

// Zero Arguments DOES need parens around the empty string
const triple = () => 3;

// Two+ Arguments NEED parens
const quadru = (num1, num2) => num1 * num2;

const numbers = [1,2,3];

// Slimmed down Map function with One Argument
numbers.map(num => num * 2);



// This one fails and gives me this error: 
// 		TypeError: Cannot read property 'teamName' of undefined
// the "this" is ambiguous here and doesn't refer to the team variable like you want it to
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad', 
  teamSummary: function() {

    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`;
    });
  }
};

team.teamSummary()

// Bind Solution
const team2 = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad', 
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`;
    }.bind(this));
  }
};


// Self Solution
const team3 = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad', 
  teamSummary: function() {
    const self = this;
    return this.members.map(function(member) {
      return `${member} is on team ${self.teamName}`;
    });
  }
};


// Arrow Functions solve this problem
// arrow functions use lexical 'this'
const team4 = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad', 
  teamSummary: function() {
		// this === team when using the fat arrow function
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};



// Fibonacci example
const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}