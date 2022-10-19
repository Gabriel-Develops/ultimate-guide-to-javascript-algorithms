/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

// For Loop + Switch
function vowelsCounter(text) {
    let total = 0
    for (let i = 0; i < text.length; i++) {
        switch (text[i].toLowerCase()) {
            case 'a': {
                total++
                continue
            }
            case 'e': {
                total++
                continue
            }
            case 'i': {
                total++
                continue
            }
            case 'o': {
                total++
                continue
            }
            case 'u': {
                total++
                continue
            }
        }
    }
    return total
}

// For of Loop + include array method
function vowelsCounter(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u']

    let total = 0
    for (const letter of text.toLowerCase()) {
        vowels.includes(letter) && total++
    }
    return total
}

// Regular Expressions
function vowelsCounter(text) {
    const matchingVowels = text.match(/[aeiou]/gi) || []
    return matchingVowels.length
}


module.exports = vowelsCounter;
