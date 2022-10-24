/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/

// Recursion Method
function factorial(n, memo) {
    if (n === 1 || n === 0) {
        return 1
    } else if (n < 1) {
        return -1 * factorial(n * -1)
    } else {
        return n * factorial(--n)
    }
}

// For Loop
function factorial(n, memo) {
    if (n === 0) {
        return 1
    }
    let product = 1
    for (let i = 1, end = Math.abs(n); i <= end; i++) {
        product *= i
    }
    return Math.sign(n) * product
}

// While Loop
function factorial(n, memo) {
    if (n === 0) 
        return 1
    
    let product = 1, number = Math.abs(n)
    while (number > 1) {
        product *= number
        number--
    }
    return Math.sign(n) * product
}

module.exports = factorial