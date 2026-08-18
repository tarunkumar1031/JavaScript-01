const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and current value: ${currval}`);
    
//     return acc + currval
// }, 0)

//  or

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

//  intial lena h pehle kuch bhi mainw 0 liya h 
//  acc = 0
//  0 +1 = 1
//   acc = 1
//  1+2 = 3

//  acc = 3

//  3+3 = 6

// acc = 6

// console.log(myTotal);

const shoppingCart = [
    {
        itemname: "js course",
        price: 999
    },
    {
        itemname: "java course",
        price: 1999
    },
    {
        itemname: "css course",
        price: 99
    },
]

const priceTopay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceTopay);
