let month = prompt("Enter a month:").toLowerCase();
let normalmonth = month.charAt(0).toUpperCase() + month.slice(1);
let days;

switch (normalmonth) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        days = 31;
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        days = 30;
        break;
    case 'February':
        days = 28;
        break;
    default:
        console.log("Invalid month entered.");
        break;
}

if (days) {
    console.log(`${normalmonth} has ${days} days.`);
}
