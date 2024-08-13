let age = prompt("Enter your age:");

age = Number(age);

if (age >= 18) {
    console.log('You are old enough to drive.');
} else {
    let yearsLeft = 18 - age;
    console.log('You are left with ' + yearsLeft + ' years to drive.');
}