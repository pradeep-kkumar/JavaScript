// JavaScript Type Conversion:- 

// Converting Strings to Numbers

let a = "34";

// console.log(typeof a);  // this is a string

let a_in_number = Number(a);

// console.log(typeof a_in_number) // now this is a number


// Converting Numbers to Strings ***************************************************************************

let num = 38;

// console.log(typeof num);

let newNum = String(num)

// console.log(typeof newNum)


// Converting Dates to Numbers ***************************************************************************

let date = new Date()

// console.log(date, typeof date) // object

let newDate = Number(date)

// console.log(newDate, typeof newDate) // 1731137612703 number


// Converting Numbers to Dates ***************************************************************************

let number = 2024

// console.log(number, typeof number) // 2024 number

let inDate = Date(number)

// console.log(inDate, typeof inDate); // Sat Nov 09 2024 07:37:10 GMT+0000 (Coordinated Universal Time) string


// Converting Booleans to Numbers ***************************************************************************

let bool = false 

// console.log(bool, typeof bool); // false boolean

let inNum = Number(bool)

// console.log(inNum, typeof inNum); // 0 number



// Converting Numbers to Booleans ***************************************************************************

let num1 = 12

console.log(num1, typeof num1);

let inBool = Boolean(num1)

console.log(inBool, typeof inBool);

