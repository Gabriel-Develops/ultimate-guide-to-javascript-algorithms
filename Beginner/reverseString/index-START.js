/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// Method Chaining
function reverseString(text) {
    return text.split('')
        .reverse()
        .join('')
}

// Spread Operator + Method Chaining
function reverseString(text) {
    return [...text].reverse().join('')
}

// For Loop - O(n)
function reverseString(text) {
    let reversedText = ''
    // for (let i = text.length - 1; i >= 0; i--) {
    //     reversedText += text[i]
    // }
    for (let i = 0; i < text.length; i++) {
        reversedText += text[text.length - 1 - i]
    }
    return reversedText
}

// Recursion
function reverseString(text) {
    if (text === '')
        return ''
    else
        return reverseString(text.slice(1)) + text[0]
}

// Reduce Method
function reverseString(text) {
    return text.split('')
        .reduce((reversedText, x, i) => text[i] + reversedText, '')
}


module.exports = reverseString