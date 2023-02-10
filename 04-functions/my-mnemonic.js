// My Mnemonic
// Write a function myMnemonic that accepts up to four strings. myMnemonic should return a new string of the first characters for each string argument.

// Note that the user may not pass in all four strings!

// Example:
// myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
// myMnemonic('We', 'Eat', 'Eggs'); // => WEE

// YOUR CODE BELOW
function myMnemonic(string1, string2, string3, string4) {
    let output = '';
    if (string1) output += string1[0].toUpperCase();
    if (string2) output += string2[0].toUpperCase();
    if (string3) output += string3[0].toUpperCase();
    if (string4) output += string4[0].toUpperCase();
    return output;
}

// Do not change the code below this line
module.exports = { myMnemonic };
