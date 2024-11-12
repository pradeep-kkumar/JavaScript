// singleton
// Object.create

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name : "Pradeep",
    "full name" : "Pradeep Kumar",
    [mySym] : "mykey1",
    age : 23,
    location : "Noida",
    email : "pradeep@gmail.com",
    isLoggedIn : false,
    lastLoginDate : ["Monday", "Daturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);

JsUser.email = "punit@gmail.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)

JsUser.email = "john@google.com"
// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello JS User");    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this["full name"]}. i am ${this.age} ages old`);    
}

console.log(JsUser);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


