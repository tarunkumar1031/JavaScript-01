//  if

const isUserLoggedIn = true

const temp = 41

// if (temp === 43) {

//     console.log("yes less than");
    

    
// }
// console.log("greater than 50 ");

// < , > , <= , >= , == , === , ! , !=  , !==


// if else

//     if (temp === 41) {

//     console.log("yes less than");
// }else{

//     console.log("greater than 50 ");
// }

// const score = 200

// if (score > 100) {

//     const power = "fly"
//     console.log(`User power: ${power}`);
    
    
// }
// console.log(`User Power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test");

//  this is not good , comma method 

// if (balance > 500) console.log("test"),console.log("yes");


//  else if


// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750){
//    console.log("less than 750");
// }else if(balance < 950){
//    console.log("less than 950");
// }else if(balance < 1200){
//    console.log("less than 1200");
// }


//  && both condn true then execute

const UserLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserLoggedIn && debitcard && 2==3) {
    console.log("Allow to buy course");
    
}

//   || or dono me se ek true tb execute

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("user logged in");
    
}


