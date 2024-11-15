function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(num1, num2){

    // let result = number1 + number2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);  // Result: 8

// 1st method ***************************************************

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Pradeep"));


// 2st method ***************************************************

// function loginUserMessage(username){
//     if (username === undefined){
//         console.log("Please enter the username.");
//         return        
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage()); // Please enter the username.


// 3st method ***************************************************

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage()) // sam just logged in

// console.log(loginUserMessage("hitesh")) // hitesh just logged in



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 500, 600, 700));  // [ 400, 500, 600, 700 ]


const user = {
    name: "Pradeep",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);    
}

// handleObject(user)

handleObject({
    name: "sam",
    price: 199
})

const myNewArray = [200, 300, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([1,2,3,4,5,6]));

