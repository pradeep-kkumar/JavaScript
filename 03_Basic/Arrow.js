const user = {
    username: "Pradeep",
    price: 999,

    welcomeMessage: function(){
        console.log(` ${this.username} , welcome to website `);
        console.log(this); // it will be return full object   
    }
}

// console.log(user);
// user.welcomeMessage();
user.username = "Sam"
// user.welcomeMessage()

// console.log(this); // it will be return {} empty object





// function chai(){
//     let username = "Pradeep"
//     // console.log(this); // this keyworld do not work with function
//     // console.log(this.username); // it will be return undefined 
// }

// chai()



// const chai = function () {
//     let username = "pradeep"
//     console.log(this.username);
// }

// chai()  // undefined


// Arrow function ******************************* (same as normal function)

const chai = () => {
    let username = "pradeep"
    console.log(this);    
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1+ num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )  // we can use arraw function like this method

// console.log(addTwo(3,6));



// const addTwo = (num1, num2) => ({username: "hitesh"}) // we can not use as {},  right waqy is ({})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

