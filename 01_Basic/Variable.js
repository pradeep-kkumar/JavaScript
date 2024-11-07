// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const

// *********************************************************************************************

// const emp_id = "1231"  // this is a constant variable we can be never change it.

// emp_id = 12 // not allowed 

// let emp_name = "John" 

// var emp_email = "john@gmail.com"  // it is also a variable type but it is not used in those days

// emp_phone = "9876789878"

// let emp_city; // it undefined variable 

// How to print the statement

// console.log(emp_id)

// If we want to print out put in table form 

// console.table([emp_id, emp_name, emp_phone, emp_email, emp_city]);

// *********************************************************************************************

// The var keyword was used in all JavaScript code from 1995 to 2015.

// The let and const keywords were added to JavaScript in 2015.

// The var keyword should only be used in code written for older browsers.

// *********************************************************************************************

// What is the differance b/w var, let and const
// var :- 
// 1. var is an ECMAScript1 feature.
// 2. The variables that are defined with var statement have function scope.
// 3. We can declare a variable again even if it has been defined previously in the same scope.

// var name = "JavaScript"
// {
//     var name = "Python"
//     console.log(name)
// }
// console.log(name)

// *********************************************************************************************

// let :- 
// 1. let is a feature of ES6.
// 2. The variables that are defined with let statement have block scope {}.
// 3. We cannot declare a variable more than once if we defined that previously in the same scope.

let name = "JavaScript"
{
    let name = "Python"
    console.log(name)
}
console.log(name)