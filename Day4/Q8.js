let day = prompt("What is the day today?").toLowerCase();
let formattedDay = day.charAt(0).toUpperCase() + day.slice(1);

if (day === 'saturday' || day === 'sunday') {
    console.log(`${formattedDay} is a weekend.`);
} else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
    console.log(`${formattedDay} is a working day.`);
} else {
    console.log('Invalid day');
}
