/**
 * The code demonstrates the use of callbacks in a nested structure, also known as callback hell.
 * @param cb - short for "callback", which is a function that is passed as an argument to another
 * function and is executed after the first function has completed its task. In this code, each
 * function (register, sendEmail, login, and getUserData) takes a callback function as an argument,
 * which is executed after
 * 
 * ! it's important to note that irrespective of time taken by register(), sendEmail() etc. function they run only if their parent function got executed while the code outside the callback hell keep executing {Other Apllication work prints first then the register()}
 */


// ! callbacks

function register(cb) {

    setTimeout(() => {
        console.log("registered")
        cb();
    }, 1000)

};

function sendEmail(cb) {
    setTimeout(() => {
        console.log("Email sent!")
        cb();
    }, 3000);
};
function login(cb) {
    setTimeout(() => {
        console.log("User logged in!")
        cb();
    }, 1000)
}
function getUserData(cb) {
    setTimeout(() => {
        console.log("Got user data!")
        cb();
    }, 4000)
}
function displayUserData() {
    console.log("displayed data!")
}

//imp cb nesting  -->  callback hell

register(function () {
    sendEmail(function () {
        login(function () {
            getUserData(function () {
                displayUserData()
            })
        })
    })
})

console.log("Other Apllication work!")
