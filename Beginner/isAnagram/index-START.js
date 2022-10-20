/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/


// Inline
function isAnagram(stringA, stringB) {
    return stringA.split('').sort().join('').toLowerCase() === stringB.split('').sort().join('').toLowerCase()
}

// With sub Function 
function isAnagram(stringA, stringB) {
    function sanitizeString(string) {
        return string.toLowerCase().split('').filter(x => x >= 'a' && x <= 'z').sort().join('')
    }
    return sanitizeString(stringA) === sanitizeString(stringB)
}


module.exports = isAnagram