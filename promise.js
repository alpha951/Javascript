function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("registered")
            //? if we don't call resolve() then the next function will not be called
            resolve('Error while registering..');
            //    return reject("Error while registering!")
        }, 1000)
    })
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Email sent!")
            resolve()
        }, 3000);
    })
};

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User logged in!")
            resolve()
        }, 1000)
    })
}
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Got user data!")
        }, 4000)
    })
}
function displayUserData() {
    console.log("displayed data!")
}


//! "then" method can be used on a "Pomise"

// ? The data passed inside the resolve() can be accessed by "then()" while data passed inside the reject() can be accessed using catch(err);

register().
    then(login).
    then(sendEmail).
    then(getUserData).
    then(displayUserData).catch((err) => {
        console.log(err);
    })