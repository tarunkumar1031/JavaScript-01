// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
})();
// chai()

// ()()

// ( function AURCODE() {
//     console.log(`DB TWO CONNECTED ${name}`);
    
// })("tarun")

( (name) => {
    console.log(`DB TWO CONNECTED ${name}`);
    
})("tarun")

