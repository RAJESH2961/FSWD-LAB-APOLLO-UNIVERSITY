// This is our custom module.
const greet = (name) => {
return `Hello, ${name}! Welcome to NodeJS Modules.`;
};
const add = (a, b) => {
return a + b;
};
// Export the functions to make them available to other files
module.exports = {
greet,
add
};