// Default Greet
// Define a function, defaultGreet, that takes a first and a last name. defaultGreet should return a string greeting for the given names.
// If the user does not define a last name, assume the last name is 'Doe'.

// YOUR CODE BELOW
function defaultGreet(first, last) {
    if (!last) last = 'Doe';
    return `Hi ${first} ${last}!`;
}

// Do not change the code below
module.exports = { defaultGreet };
