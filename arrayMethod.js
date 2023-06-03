
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


//! reduce


//! filter