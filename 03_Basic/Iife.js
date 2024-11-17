// Immediatly Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // if we want to run second iife we need to used ; (semi collan)

// mean like chai() same as we can use iife ()(); // ; means for the run next function 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')