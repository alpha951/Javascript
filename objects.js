
//! Enhacned Object literals
const keyName = 'name'

const product = {
    //! computed property keys
    [keyName]: 'Mobile',
    price: 100,
    buy() {
        console.log("Method defination shorthand!")
    }
}

const accessToken = 'someAccessToken'
const refreshToken = 'someAccessToken'

const user = {
    // accessToken: accessToken,
    // refreshToken: refreshToken
    //! if key and value both have same name then following syntax works : Property Shorthand
    accessToken,
    refreshToken
}

//TODO:   Object Destructuring

const customer = {
    fName: 'John Doe',
    age: 30
}

// user.name

// const { fName } = customer; //works

const { fName, age } = customer

// alias

const { fName: nameId } = customer;
console.log(nameId)


