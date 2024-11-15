// Scope means `{}` not object's `{}`

// Normal method

// let a = 20
// const b = 10
// var c = 30


// console.log(a);
// console.log(b);
// console.log(c);

// With scope

// var c = 500

let a = 600

if (true){
    let a = 300
    const b = 200
    var c = 400
    // console.log("Inner: ", a); 
}

// console.log(a);
// console.log(b);
// console.log(c); // bcoz this is a var

// function nested

function one(){
    const username = "Pradeep"

    function two(){
        const website = "youtube"
        console.log(username);  
    }
    // console.log(website); // give an error

    // two()
}

// one()


if (true){
    const username = "john"
    if (username === "john"){
        const website = " facebook"
        // console.log(username + website);
    }
    // console.log((website)); // give an error 
}
// console.log(username);


// ************************ Interesting ****************************

console.log(addone(5));


function addone(num){
    return num + 1
}


addTwo(5)  // it is not work becoz it is execute before the diclaration 
const addTwo = function(num){
    return num + 2
}

