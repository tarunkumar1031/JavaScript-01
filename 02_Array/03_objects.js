// singleton

// Object.create

//  symbol
const sym = Symbol("key1");

// object literals
 const JsUser = {
    name: "Tarun",
    "full_name": "Tarun Kumar",
    age:20,
    [sym]:"mykey1",
    email: "tarunkumaraa2gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
 }

//  access only by console.log(JsUser["name"])

// console.log(JsUser.name);
// console.log(JsUser["full_name"]);
// console.log(JsUser.email);
// console.log(JsUser[sym]);

// JsUser.email = "tarun@gmail.com"
//  value freeze or unchanged krna
// Object.freeze(JsUser)
// JsUser.email = "TARUN11GAMIL.COM"

// console.log(JsUser)


JsUser.greeting = function(){
   console.log("heloo gm");
}

// JsUser.greetingTwo = function(){
//    console.log(`hello js user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123Abc"
tinderUser.name = 'samay'
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
   email: "some@gamlo.com",
   fullname1: {
      userfullname:{
         firstname: "tarun",
         lastname: "kumar"
      }
   }

}
// console.log(regularUser.fullname1.userfullname.firstname);


// const obj1 = {1: "a", 2: "b"};

// const obj2 = {3: "a", 4: "b"};

// const obj4 = {5: "c", 7: "d"}

// const obj3 = Object.assign({},obj1, obj2, obj4)

// console.log(obj3);

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
   {
      id:1,
      email:"hr@gmail.com",

   },
   {
       id:2,
      email:"hr2@gmail.com",

   }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


// object destructuring

const course = {
   name: "hindi",
   price:200,
   courseinstructor:"hitesh"
}

const{courseinstructor} = course

console.log(courseinstructor);


//  api overview

//  backend se json me values aati  h 
// json is also like objects

// {
//    "name": "tarun",
//    "coursename":"js",
//    "price":"free"
// }

















