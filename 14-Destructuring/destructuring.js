var expense = {
  type: 'Business', 
  amount: '$45 USD'
};

// var type = expense.type;
// var amount = expense.amount;

// ES6 => v1
// const { type } = expense;
// const { amount } = expense;

// ES6 => v2
const { type, amount } = expense;



// we can also use destructuring to pull properties off of an object
var savedFile = {
  extension: '.jpg',
  name: 'repost', 
  size: 14040
};

function fileSummary({ name, extension, size}) {
  return `The file ${name}${extension} is of size ${size}.`
};

fileSummary(savedFile)




const companies = [
  'Google', 
  'Facebook', 
  'Uber'
];

const [ name, name2, name3, name4 ] = companies;
name; 			// Google
name2; 			// Facebook
name3; 			// Uber
typeof name4;	// undefined

const { length }  = companies;
length			// 3

const fruit = ['apple', 'banana', 'orange', 'clementine']

const [fr1, fr2, ...rest] = fruit;
fr1;			// 'apple'
fr2;			// 'banana'
rest 			// [ 'orange', 'clementine']

const companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Google2', location: 'Menlo' },
  { name: 'Google3', location: 'San Francisco' },
];

// const [{location }] = companies;
// location;   // Mountain View


const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const { locations: [location] } = Google;
location;     // Mountain View




function signup({ username, password, email, dateOfBirth, city}) {
  // create new user
  
};

const user = {
  username: 'myname', 
  password: 'password', 
  email: 'myemail@example.com', 
  dateOfBirth: '1/1/1990', 
  city: 'New York'
};

signup(user)



const points = [
  [4, 5],
  [10, 1],
  [0, 40]
 ];

points.map(([x,y]) => {
	return { x, y }
});

var array = points.map((arr) => {
	return {x: arr[0], y:arr[1] } 
});






