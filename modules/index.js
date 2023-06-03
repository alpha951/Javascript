//! moudle names should be same 
import { libName, login } from './library.js';

//! incase of export default in the file we can import the module by any name.
import myLogin from './library.js';


//? alias

import { libName as myLibName } from './library.js';

console.log(libName)

myLogin()