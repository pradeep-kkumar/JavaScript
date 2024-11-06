// String:- The JavaScript string is an object that represents a sequence of characters.

// There are 2 ways to create string in JavaScript

// 1. By string literal
// 2. By string object (using new keyword)

// 1) By string literal:- The string literal is created using double quotes. The syntax of creating string 
// using string literal is given below:

let name = "Punit";

console.log(name)
console.log(typeof name) //  the data type  of this string is string

// 2) By string object (using new keyword)
// The syntax of creating string object using new keyword is given below:

let otherName = new String("Other name is Pradeep");

console.log(otherName)
console.log(typeof otherName) // the data type of this String is Object type

// len :- Lenght

let txt1 = "Hello, JavaScript"

console.log(txt1.length)

// charAt() :- It provides the char value present at the specified index.

let txt2 = "Hello, My name is Pradeep"

console.log(txt2.charAt(2))

// charCodeAt() :- It provides the Unicode value of a character present at the specified index.

console.log(txt2.charCodeAt(3))

// concat() :- It provides a combination of two or more strings.

let str1 = "Hello"
let str2 = " Node.js"

console.log(str1.concat(str2))


// indexOf() :- It provides the position of a char value present in the given string.

console.log(txt2.indexOf("o"))

// lastIndexOf() :- It provides the position of a char value present in the given string by searching a character from the last position.

console.log(txt2, " :- ", txt2.lastIndexOf("e"))

// search() :- It searches a specified regular expression in a given string and returns its position if a match occurs.

let str3 = "JavaScript is an OOP programming language"

console.log(str3.search("is"))

// match() :- It searches a specified regular expression in a given string and returns that regular expression if a match occurs.

let 