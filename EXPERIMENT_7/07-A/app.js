// This is our main application file.
// Import the custom module using require
const myModule = require('./my-module.js');
// Use the functions from the module
const message = myModule.greet('Rajesh');
console.log(message);
const sum = myModule.add(15, 7);
console.log(`The sum is: ${sum}`);