// Do You Play the Theremin
// Define a function doYouPlayTheTheremin that accepts a string as an argument.
// doYouPlayTheTheremin should return true if the inputted string starts with the letters s or S.
// Otherwise, doYouPlayTheTheremin should return false.

// Example:
// doYouPlayTheTheremin('Griffin'); // => false
// doYouPlayTheTheremin('Scott'); // => true

// YOUR CODE BELOW
function doYouPlayTheTheremin(inputString) {
    if (inputString.toLowerCase().startsWith('s')) return true;
    else return false; 
}

// Do not change the code below
module.exports = { doYouPlayTheTheremin };
