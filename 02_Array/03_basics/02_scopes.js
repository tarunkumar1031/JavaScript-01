

// var c = 300
//  ye wali value to aa hi nhi rhi o/p me 

let a = 350
if(true){

    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ", a);
    


}

// if ke andar wala block and bahar jo h wo global scope

// console.log(a);
// console.log(b);

//  c se output aaya !
// console.log(c);



function one(){
    const username = "tarun"

    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);

    two()
    
}

// one()

if(true){
    const username = "tarun"
    if (username === "tarun") {

        const website = "youtube"
        // console.log(username + website);
        
    }
// console.log(website);

}
// console.log(username);




//  ++++++++++++++++ interesting ++++++++++



console.log(addone(3));
function addone(num){

    return num + 1

}

// addone(3)

addtwo(4)
const addtwo = function(num1){
    return num1 + 2
}

// addtwo(4)

// 