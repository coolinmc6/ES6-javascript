const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3, 
  department: 'Engineering', 
  lead: 'Jill', 
  manager: 'Alex', 
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam
  }
};

// Symbol.iterator tells objects how to loop through the object
const names = [];
for (let name of engineeringTeam) {
  names.push(name)
};

names
