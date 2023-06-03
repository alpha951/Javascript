
//! find array method
const users = [{ name: 'Keshav' }, { name: 'John' }]

const user = users.find((user) => {
    return user.name === 'Keshav'  // this will return the first object. It'll return boolean value
})


//! findIndex

const userIdx = users.findIndex((user) => {
    return user.name === 'John'
})

console.log(user)
console.log(userIdx)

//! if user not found it returns -1


//! map


const people = [
    {
        fname: 'John',
        lnmae: 'Doe'
    },
    {
        fname: 'John',
        lnmae: 'Sinha'
    },
    {
        fname: 'Jonny',
        lnmae: 'Sins'
    }
]


//review : the array store those value which are returned by map callback on the complete iteration. Second param of map() is index of iteration

const fullNamePeople = people.map((person, i) => {
    return {
        fullName: person.fname + " " + person.lnmae
    }
})


console.log(fullNamePeople)




//! reduce
//TODO: imp and confusing


const movies = [
    {
        name: "PK",
        budget: 500
    },
    {
        name: "Matrix",
        budget: 1400
    },
    {
        name: "Social Network",
        budget: 300
    }
]


//! accumulator's initial value is set to 0
const totalBudget = movies.reduce((accumulator, movie) => {
    accumulator += movie.budget
    return accumulator;
}, 0)

console.log(totalBudget)

//! filter
const student = [
    {
        name: "studenet-1",
        marks: 60
    },
    {
        name: "studenet-2",
        marks: 33
    },
    {
        name: "studenet-3",
        marks: 23
    }
]


//imp :- the array stores those value which are returned as true by the filter condition

const failedStudent = student.filter((student) => {
    if (student.marks < 45) return true;
})
const passedStudent = student.filter((student) => student.marks >= 45)


console.log(failedStudent)
console.log(passedStudent)



//! Indexof
//? find the target element's index in the given array if not found return -1

const admins = [2, 1, 5]

const users1 = {
    name: 'XYZ',
    id: 5
}

console.log(admins.indexOf(users1.id))

//! includes 

// return boolean value whether the element present or not in the array

const isAdmin = admins.includes(users1.id);
console.log(isAdmin)

//! find
//* if find returns the target (not the index)
//! if not find then return undefined

const is = admins.find((admin) => {
    return users1.id === admin
})

console.log("is value is :-p", is)


//imp sort()
// function can be passed as an arg for custom sorting
admins.sort()


//! Splice
//imp : it deletes an element at the given index
const names = ['John', 'Jane', 'Shyam', 'Ram', 'Sameer', 'Mansi']
names.splice(2, 1); // delte 1 item from index -2 (0 indexed)
console.log(names)