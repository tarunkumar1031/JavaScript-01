// const username = true
// const username = ""

// if (username) {
//     console.log("truthy value");
    
// }else{
//     console.log("falsy value");
    
// }

// falsy values 

// false , 0 , -0 , BigInt 0n, "", undefined , NaN


// truthy values

//  "0", 'false' , " " , function(){} , []


// const userEmail = []

// if (userEmail.length === 0 ) {

//     console.log("ARRAY LENGTH EMPTY");
    
    
// }


const emptyObj = {}

if (Object.keys(emptyObj).length === 0 ) {
    // console.log("OBJECT IS EMPTY");
    
}


const sys =()=>{
    // console.log("yah");
    
}

sys(()=>{
    // console.log("run");
    
})

sys();


//  Nullish Coalescing operator (??): null underfined


let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 11

val1 = null ?? 10 ?? 15

// console.log(val1);


// Terniary operator

// condition ? true : false

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("less than 80") : console.log("greater than 80");





