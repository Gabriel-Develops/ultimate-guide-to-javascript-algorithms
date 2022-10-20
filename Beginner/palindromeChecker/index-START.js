/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/



// For Loop - O(n)
function palindromeChecker(text) {
    for (let i = 0, j = text.length - 1; i < text.length; i++, j--) {
        if (i === j || i > j)
            return true
        else if (text[i] === text[j])
            continue
        else
            return false 
    }
}

// Optimized For Loop
function palindromeChecker(text) {
    for (let i = 0; i < Math.floor(text.length / 2); i++) {
        if (text[i].toLowerCase() === text[text.length - 1 - i].toLowerCase()) {
            continue
        } else {
            return false
        }
    }
    return true
}





module.exports = palindromeChecker;