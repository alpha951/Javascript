//! for of loop

const nums = [2, 4, 5, 6, 7]

for (const num of nums) {
    console.log(nums)
}

const langauge = "JavaScript"

for (const c of langauge) {
    console.log(c)
}

//! forEach loop
nums.forEach((num) => {
    num *= 2;
    console.log(num)
})

//? for objects

const person = {
    name: 'Keshav',
    city: 'Jaipur',
    brand: 'Apple'
}

// can't iterate using for of over objects directly
for (const entries of Object.entries(person)) {
    console.log(entries)
}

// destructuring of entries
for (const [key, value] of Object.entries(person)) {
    console.log(key, value)
}



