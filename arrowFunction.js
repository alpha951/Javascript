function greet() {
    console.log("Good Morning, Boss!")
}

// ! arrow function version

//* the arrow is called fat arrow

const greeting = () => {
    console.log("Good Morning, Sir")
}


const addition = (a, b) => {
    console.log(a + b)
}

const add = (a, b) => console.log(a + b)

// for single arg no need of bracket
const print = a => console.log(a)

// for objects methods(function)

const shop = {
    //! OLD
    buy: function () {
        console.log(this)
    },

    // ! ES6
    purchase() {
        console.log(this)
    }
}

shop.buy();