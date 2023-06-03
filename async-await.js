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
            // return reject("Error triggered!") // to trigger error
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
            resolve()
        }, 1000)
    })
}

function displayUserData() {
    console.log("displayed data!")
}



//! if we are using await inside a function then the function should be defined as async function() funct{ await f()}


// ?  async function by default return a promise
async function auth() {
    try {
        const message = await register()
        await sendEmail()
        await login()
        await getUserData()
        displayUserData()
        console.log(message)
        return new Promise((resolve, reject) => {
            resolve("Okay! auth worked flawlessly")
        })
    } catch (error) {
        console.log(error)
        throw new Error()
    }
}

auth().then((data) => {
    console.log(data)
    console.log('All set to start a new project!')
}).catch((err) => {
    console.log(err)
})
