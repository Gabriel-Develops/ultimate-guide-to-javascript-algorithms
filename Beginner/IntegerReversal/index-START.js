/* CHALLENGE
Given an integer, return an integer that is the reverse 
ordering of that which was received. E.g
    reverseInteger(-123) // should return -321
*/


// function reverseString(text) {
//     return [...text].reduce((acc, char) => char + acc, '')
// }

// function reverseInteger(num) {
//     let reversedNumber = parseInt(reverseString(num.toString()))
//     return (reversedNumber * Math.sign(num))
// }

// For ... of loop
function reverseInteger(num) {
    let reverseStr = '', isNegative = ''
    for (const c of num.toString()) {
        if (c === '-') {
            isNegative = '-'
        } else {
            reverseStr = c + reverseStr
        }
    }
    return +`${isNegative}${+reverseStr}`
}

// Recursion
function reverseInteger(num) {
    // Termination Conditional
    if (num.toString().length <= 1) {
        return +num
    // Case of negative sign
    } else if (num.toString()[0] === '-') {
        return +('-' + reverseInteger(num.toString().slice(1)))
    } else {
        return +(reverseInteger(num.toString().slice(1)) + num.toString()[0])
    }
}



module.exports = reverseInteger;
