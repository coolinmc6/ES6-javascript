// Basics
function* numbers() {
	 yield;
}

const gen = numbers();
gen.next();
gen.next();
//console.log(numbers())




function* shopping() {
  // stuff on the sidewalk
  
  // walking down the sidewalk
  
  // go into the store with cash
	const stuffFromStore =  yield 'cash';
  // walking to laundry place
	const cleanClothes = yield 'laundry';
  
  // walking back home
  return  [stuffFromStore, cleanClothes]
}

const gen = shopping(); // nothing happens...creating gen doesn't do anything
// gen.next() is when code starts running
gen.next(); // leaving our house

gen.next('groceries'); // leaving the store with groceries
// 'groceries' is then assigned to stuffFromStore; it essentially replaces the yield cash statement
gen.next('clean clothes');







function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const gen = colors();
gen.next();
gen.next();
gen.next();
gen.next();

const myColors = [];
for (let color of colors()) {
  myColors.push(color)
}

myColors;
// we can use generators to iterate through any kind of data structure that we want




const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};

const engineeringTeam = {
  testingTeam,
	size: 3, 
  department: 'Engineering', 
  lead: 'Jill', 
  manager: 'Alex', 
  engineering: 'Dave'
};

function* TeamIterator(team) {
 	yield team.lead;
  yield team.manager;
  yield team.engineering
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
}

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name)
};

names






