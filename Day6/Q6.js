console.log('i    i^2   i^3');  

for (let i = 0; i <= 10; i++) {
    let square = i * i;
    let cube = i * i * i;
    console.log(`${i.toString().padStart(2)}    ${square.toString().padStart(4)}   ${cube.toString().padStart(4)}`);
}
