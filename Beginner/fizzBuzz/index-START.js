/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/


// For Loop
function fizzBuzz(n) {
    for (let i = 1; i <= n; i ++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

// For Loop with Concatenation
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let result = ''
        if (i % 3 === 0) result += 'fizz'
        if (i % 5 === 0) result += 'buzz'
        console.log(result || i)
    }
}


module.exports = fizzBuzz