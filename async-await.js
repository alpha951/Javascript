function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("registered")
            resolve("success");
        }, 1000)
    })
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // return reject("Error triggered!")
            console.log("Email sent!")
            resolve()
        }, 2000);
    })
};

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User logged in!")
            resolve()
        }, 1200)
    })
}

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Got user data!")
        }, 1000)
    })
}

function displayUserData() {
    return new Promise((resolve, reject) => {
        console.log("displayed data!")
    })
}



//! if we are using await inside a function then the function should be defined as async function() funct{ await f()}


// ?  async function by default return a promise
async function auth() {
    try {
        const message = await register()
        await sendEmail()
        await login()
        await getUserData()
        await displayUserData()
        console.log(message)
    } catch (error) {
        console.log(error)
        throw new Error()
    }
}

auth().then(() => {
    console.log('All set to start a new project!')
}).catch((err) => {
    console.log(err)
})
