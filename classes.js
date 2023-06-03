//! old method to form class in JS :- using functions

function Person(name) {
    this.name = name
}

const p1 = new Person("Keshav")
const p2 = new Person("John")
console.log(p1)

// TODO:
//! ES6 syntax to form class

class Student {
    name;

    constructor(name) {
        this.name = name;
    }
    //? method
    greet() {
        console.log("Ram-Ram!")
    }
}

const s1 = new Student("Ram")
const s2 = new Student("Mumtaz")
s1.name = "Shahjah"

console.log(s1)
console.log(s2)

s2.greet()


//! inheritance 
//! GreatePerson inherit properties and method of Student class
class GreatStudent extends Student {
    attitude = 'cool'

    //! overriding of inherited method
    greet() {
        console.log("Good Morning!")
    }
}

const Keshav = new GreatStudent("Keshav")

console.log(Keshav)
console.log(Keshav.greet())
