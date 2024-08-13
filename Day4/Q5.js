let score = prompt("Enter the marks") 
let grade;

switch (true) {
    case (score >= 80 && score <= 100):
        grade = 'A';
        break;
    case (score >= 70 && score < 80):
        grade = 'B';
        break;
    case (score >= 60 && score < 70):
        grade = 'C';
        break;
    case (score >= 50 && score < 60):
        grade = 'D';
        break;
    case (score >= 0 && score < 50):
        grade = 'F';
        break;
    default:
        grade = 'Invalid score';
        break;
}

console.log(`The student's grade is: ${grade}`);
