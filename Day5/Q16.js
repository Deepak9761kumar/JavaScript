let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.split(/\s+|,|\./);  
words = words.filter(word => word.length > 0);
console.log(words);
console.log(words.length);
