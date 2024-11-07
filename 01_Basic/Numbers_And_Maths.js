const num = 400 // but it is not sure

// console.log(num);

const balance = new Number(100) // sure that it is 100% a number

// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.98866
// console.log(otherNumber.toPrecision(4));

const num1 = 123.9879
// console.log(num1.toPrecision(2))
// console.log(num1.toPrecision(3))
// console.log(num1.toPrecision(4))

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,000

// +++++++++++++++++++++++++++++  Maths ++++++++++++++++++++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));
// console.log((Math.ceil(4.9)));
// console.log(Math.floor(4.8));
// console.log(Math.min(2,3,4,11));
// console.log(Math.max(2,3,4,11));

// console.log(Math.random());
// console.log(Math.random()*10 + 1);
// console.log(Math.floor(Math.random()*10 + 1));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);






