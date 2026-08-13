
function myname(){

    console.log("T");
    console.log("A");
    console.log("R");
    console.log("U");
    console.log("N");
}

// myname()

// function addTwonumbers(number1, number2){
//     console.log(number1 + number2);
    

// }

function addTwonumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
    // console.log("tarun");
    
    

}
const result = addTwonumbers(3, 4)
// console.log("result: ", result);


function LoginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter username");
        return

    }
    return `${username} just logged in`

}
// console.log(LoginUserMessage("TARUN"));

// no value pass in argument 
// console.log(LoginUserMessage());


//  rest operator

// function calculateCartPrice(...num1){
//     return num1

// }

function calculateCartPrice(val1,val2, ...num1){
    return num1

}

// ... rest and spread operator 

// console.log(calculateCartPrice(200,333,444,433));


const user = {
    username: 'tarun',
    price:99
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

// handleObject({
//     username:"tarun",
//     price:33
// })

const myNewArray = [200, 300, 100, 444]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 399, 444, 555]));





