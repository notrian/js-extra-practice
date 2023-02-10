// Max of Three
// Write a function maxOfThree that accepts three number arguments.
// maxOfThree should return largest number of the three.

// Example:
// maxOfThree(5, 4, 10); // => 10
// maxOfThree(7, 7, 4); // => 7

// YOUR CODE BELOW
function maxOfThree(num1, num2, num3) {
    let highestNum = 0;
    if (num1 > highestNum) highestNum = num1;
    if (num2 > highestNum) highestNum = num2;
    if (num3 > highestNum) highestNum = num3;
    return highestNum;
}

// Do not change the code below
module.exports = { maxOfThree };
