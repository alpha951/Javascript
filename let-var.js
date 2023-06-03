
var age = 18;

if (age >= 18) {
    let driving = true;
    var safe = true;
}

// ReferenceError: driving is not defined
console.log(driving);

console.log(safe)  // true :- no error

//! var has functional scope
//? let and const has block scope


//! no error
var product = 'Laptop'
var product = 'Mobile'

//! error :- Cannot redeclare block-scoped variable
// let obj = 'Laptop'
// let obj = 'Mobile'

var age = 18;
// console.log(window.age) // 18

let year = 2023
console.log(window.year) // undefined

//! let doesn't attach it's value to the window object in the browser


const a = 'Laptop'
a = 'Mobile ' // ! error : assignment to constant variable is not allowed


console.log(Name)  //undefined
var Name = "Keshav"

console.log(familyName) // Reference error :- Cannot access familyName before initialization
let familyName = "Carpenter"
//! same for const


const dob = {
    year: 2002
}

//! valid
dob.year = 2003  // asssignment to constant objects'property is allowed


/**
 * todo   https://caniuse.com
 */




