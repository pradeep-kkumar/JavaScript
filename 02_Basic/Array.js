// Array :- An array is a special variable, which can hold more than one value.

const myArr = [0, 1, 2, 3, 4, 5];

// console.log(myArr[1]);

const myHeros = ["bmw", "audi", "suzuki"];

// console.log(myHeros);

// Array Methods

// myArr.push(6) // add 6
// myArr.push(7)
// console.log(myArr);
// myArr.pop() // remove last element
// console.log(myArr);

// myArr.unshift(9) // add element in the starting
// console.log(myArr);
// myArr.shift() // remove the stating element


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// console.log(myArr);

// const newArr = myArr.join() // The join() method also joins all array elements into a string. (0,1,2,3,4,5 string)

// console.log(myArr);
// console.log(newArr, typeof newArr);

// Slice, Splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 4); // The slice() method slices out a piece of an array into a new array

// console.log(myn1)

// const myn2 = myArr.splice(1, 4) 

// console.log(myn2)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const new_fruits = fruits.splice(2, 0, "Lemon", "Kiwi");

// console.log(fruits);


const Arr1 = ["A", "B", "C", "D"]

// console.log(Arr1.toString(), typeof Arr1.toString())

// console.log(Arr1.length);

// console.log(Arr1.at(3));

// delete Arr1[1]

// console.log(Arr1);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys); // using concat we can merge only two arrays.

// console.log(myChildren);

const allChildren = [...myGirls, ...myBoys] // we can merge two or more then two arrays using (...)

// console.log(allChildren);

const Arr2 = [1,2,3,4,[5,6],7,[6,7,[4,5]]]

const real_Arr2 = Arr2.flat(Infinity) // Flattening an array is the process of reducing the dimensionality of an array.

// Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

// console.log(real_Arr2);





console.log(Array.isArray("Pradeep"));
console.log(Array.from("Pradeep"));
console.log(Array.from({name : "Pradeep"})); // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));






















