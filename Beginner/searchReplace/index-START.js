/* CHALLENGE
Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence.
e.g searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch"
*/


// Complex
function searchReplace(string, word, newWord) {
    let newWordCap = newWord
    let shortestLen = Math.min(word.length, newWord.length)
    for (let i = 0; i < shortestLen; i++) {
        if (word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase()) {
            // Is upperCase
            newWordCap = newWordCap.slice(0, i) + newWordCap[i].toUpperCase() + newWordCap.slice(i + 1)
        } else {
            // Is not Uppercase
            newWordCap = newWordCap.slice(0, i) + newWordCap[i].toLowerCase() + newWordCap.slice(i + 1)
        }
    }
    
    string.replaceAll(word, newWordCap)
    console.log(string)
    return string.replaceAll(word, newWordCap)
  }

// Simple
function searchReplace(string, word, newWord) {
    let newWordCap = ''
    if (word[0] === word[0].toUpperCase())
        newWordCap = newWord[0].toUpperCase() + newWord.slice(1)
    else
        newWordCap = newWord
    return string.replace(word, newWordCap)
}





module.exports = searchReplace;