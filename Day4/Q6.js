let month = prompt("Enter the month: ");
let season = '';

if (month === 'september' || month === 'october' || month === 'november') {
    season = 'Autumn';
} else if (month === 'december' || month === 'january' || month === 'february') {
    season = 'Winter';
} else if (month === 'march' || month === 'april' || month === 'may') {
    season = 'Spring';
} else if (month === 'june' || month === 'july' || month === 'august') {
    season = 'Summer';
} else {
    season = 'Invalid month';
}

console.log(`The season is: ${season}`);
