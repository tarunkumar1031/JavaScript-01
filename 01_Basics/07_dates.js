// let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let mycreatedDate = new Date(2026, 0, 23)
// let mycreatedDate = new Date(2026, 0, 23, 5, 3)
let mycreatedDate = new Date("01-14-2024")
// console.log(mycreatedDate.toLocaleString());
// console.log(mycreatedDate.toDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth()+1);


console.log(newDate.toLocaleString('default',{
    weekday: "short",

}));