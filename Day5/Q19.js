const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const countries = ['USA', 'Canada', 'Germany', 'Japan', 'Australia', 'India', 'Brazil', 'Mexico', 'China', 'Russia', 'South Africa', 'Egypt'];


//a
ages.sort((a, b) => a - b);

const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log('Sorted ages:', ages);
console.log('Minimum age:', minAge);
console.log('Maximum age:', maxAge);
//b


ages.sort((a, b) => a - b);

const length = ages.length;
let median;

if (length % 2 === 0) {

  const middle1 = length / 2 - 1;
  const middle2 = length / 2;
  median = (ages[middle1] + ages[middle2]) / 2;
} else {
  
  const middle = Math.floor(length / 2);
  median = ages[middle];
}

console.log('Sorted ages:', ages);
console.log('Median age:', median);
