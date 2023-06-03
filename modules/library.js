
// Method -1
// export const libName ='es6-lib'

const libName = 'es6-lib'
console.log("Hi, I'm a library")


export const login = () => {
    console.log("Login")
}

module.exports = { libName }

// export default libName // works
export default { login }