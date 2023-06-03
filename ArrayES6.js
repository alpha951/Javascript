//TODO: Array Destructuring 

const data = ['Rakesh', 30, 'Dev']
const [fName, age, job] = data

console.log(fName)
console.log(age)
console.log(job)

//? Default Parameters

const register = (name, password, image = 'test.png') => {
    console.log(name, password, image)
}

//? Spread operator

// used to copy array without for loop

const lng = ['C', 'C++', 'JS']

const newLng = [...lng]
const moreLng = ['TypeScript', ...lng]
const soManyLng = [...lng, 'Go', 'Dart']
console.log(moreLng)


// ! for objects

const settings = {
    volume: 10,
    brightness: 50
}

//! this is not a new object, it's still pointing to settings obj only. It's acts like a pointer
const newSetting = settings; // 😘
newSetting.volume = 20
console.log(settings.volume) // 20 

//! to create duplicate copy of object without pointing to it.
//? shallow copy
const nayiSettings = { ...settings }

const tooMuchSettings = { ...settings, constrast: 50 }

const changedSetting = { ...settings, volume: 30 }


// TODO: Rest Operator

//! used in functinon args: to make args compact
//! pass args as array of arg

const addThese = (a, b, c) => a + b + c;

const add = (...items) => {
    console.log(items)  // print an array of args
}

const ans = add(2, 4, 5);
console.log(ans)