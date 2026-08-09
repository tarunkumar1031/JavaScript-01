const name = "tarun"
const repocount = 50

// console.log(name + repocount + " yess"); not good format 

console.log(`my name is ${name} and repocount is ${repocount} `);

const gaemname = new String('hiteshhc')

// console.log(gaemname);

// console.log(gaemname[3]);

// console.log(gaemname.__proto__);

// console.log(gaemname.length);

// console.log(gaemname.toUpperCase());

// console.log(gaemname.charAt(2));

// console.log(gaemname.indexOf('e'));

console.log(gaemname.substring(2,5));

console.log(gaemname.slice(3,6));

console.log(gaemname.slice(-3,7));

const newstr = "   tarun     "
console.log(newstr.trim());


const  url = "https://tarun.com/tarun%20kumar"

console.log(url.replace('%20', '-'));

console.log(url.includes('32'));


const str1 = "tarun-kumar-rajput"

console.log(str1.split('-'));

const str = "hello"
const reverseStr = str.split("").reverse().join("");
console.log(reverseStr);
