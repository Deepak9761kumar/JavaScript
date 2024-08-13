
const myAge = 25; 

const userAge = parseInt(prompt("Enter your age:"), 10);

if (userAge > myAge) {
    console.log(`You are ${userAge - myAge} years older than me.`);
} else if (userAge < myAge) {
    console.log(`I am ${myAge - userAge} years older than you.`);
} else {
    console.log("We are the same age.");
}
