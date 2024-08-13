let str = "30 Days Of JavaScript";
console.log(str.startsWith("30")); 

console.log(str.endsWith("JavaScript")); 

let matches = str.match(/a/g);
console.log(matches); 

let part1 = "30 Days of";
let part2 = " JavaScript";
let fullStr = part1.concat(part2);
console.log(fullStr); 

console.log(str.repeat(2));  



