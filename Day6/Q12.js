let sumEvens = 0;
let sumOdds = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEvens += i;  
    } else {
        sumOdds += i;  
    }
}

const sums = [sumEvens, sumOdds];
console.log(sums);  
