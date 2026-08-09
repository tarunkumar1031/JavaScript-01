const arr = [0,1,4,5]
console.log(arr[0]);

const myArr2 = new Array(1,23,4,5);
// console.log(myArr2[2]);

// Array Methods

// myArr2.push(6)
// myArr2.push(7)
// myArr2.pop()

// myArr2.unshift(9)
// myArr2.shift(9)
// myArr2.shift(23)

// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(4));

// const newArr = myArr2.join()

// console.log(myArr2);
// console.log(newArr);


// slice , spice

// console.log("A ", myArr2);

// const myn1 = myArr2.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr2);

// const myn2 = myArr2.splice(1, 3)
// console.log("c ",myArr2);

//  splice original array ko change kr deta h or end tk output deta h start se 

// console.log(myn2);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// const allheros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros[3][1]);
// console.log(allheros);

// spread operator ...
const all_newheros = [...marvel_heros, ...dc_heros]
// console.log(all_newheros);

const another_arr = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]

const second_arr = another_arr.flat(Infinity)

console.log(second_arr);


//  convert into arraY 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));






















