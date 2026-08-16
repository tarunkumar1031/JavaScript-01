//  for of

// for (const element of object) {
    
// }

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
    
// }


// const greetings = "hello namaste"

// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
    
    
// }

// Maps = map khud me ek object h jisme key - value pair , unique elemets hote h not duplicate

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('Fr', "France")

// map.set('IN', 'India')

console.log(map);


for (const [key, value] of map) {
    console.log(key, ':-', value);
    
    
}

const myObject = {
    'game1': "PUBG",
    'game2': "ff"
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
    
// }