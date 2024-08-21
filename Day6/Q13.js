function generateRandomNumbers(count, min, max) {
    const numbers = [];
    for (let i = 0; i < count; i++) {

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(randomNumber);
    }
    return numbers;
}   
const randomNumbers = generateRandomNumbers(5, 0, 100);
console.log(randomNumbers);
