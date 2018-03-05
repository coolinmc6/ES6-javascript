
const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  const {title, department } = profile;
  return title === 'Engineer' && department === 'Engineering';
}


// Convert this array of arrays into an array of objects
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return { subject, time, teacher }
});



const numbers = [1, 2, 3];

function double([number, ...rest]) {
   return !!number && [number*2, ...double(rest)]
}