let sumEvens = 0;
let sumOdds = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEvens += i;  // 
    } else {
        sumOdds += i;   
    }
}

console.log('The sum of all even numbers from 0 to 100 is:', sumEvens);
console.log('The sum of all odd numbers from 0 to 100 is:', sumOdds);
