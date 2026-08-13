
//  this function

const user = {
    username: "tarun",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);



// function chai(){
//     let username1 =  "raj";
//     console.log(this.username1);
    
// }
// chai()

// const chai = function(){
//     let username = "tarun";
//     console.log(this.username);
    

// }

// chai()


//  arrow function

// const chai = () => {
//     let username = "tarun";
//     console.log(this.username);
    
// }

// chai()


// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// const addtwo = (num1, num2) => num1 + num2

//  no return needed when no curly braces
const addtwo = (num1, num2) => (num1 + num2)

// const addtwo = (num1, num2) => {(username: "tarun")}

console.log(addtwo(3,5));




