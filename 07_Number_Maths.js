const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);

// to-fixed
console.log(balance.toFixed(2)); //100.00

const otherNumber = 23.9966
console.log(otherNumber.toPrecision(3)); // 23.9


const hundreds = 100000
console.log(hundreds.toLocaleString());


// ++++++++++ Maths

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.7));

// choosing upper or lower value
// ceil top value
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); // 4


console.log(Math.min(3,4,5,6)); // 3
console.log(Math.max(3,4,5,6)); // 6

console.log(Math.random()); // 0 - 1 k bich m value

console.log(Math.random()* 10 +1);



const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min))