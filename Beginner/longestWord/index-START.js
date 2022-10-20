/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    let longestWord = {length: 0, text: ''}
    for (let i = 0, textArr = text.split(' '); i < textArr.length; i++) {
        if (textArr[i].length > longestWord.length) {
            longestWord.length = textArr[i].length
            longestWord.text = textArr[i]
        }
    }
    return longestWord.text
}


module.exports = longestWord