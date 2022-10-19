/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/


// using Object + for ... in
function maxRecurringChar(text) {
    const letterCounts = text.split('').reduce((charCountObj, x) => {
        if (!charCountObj[x])
            charCountObj[x] = 1
      	else
          charCountObj[x]++
      return charCountObj
    }, {})
    
    let max = 0
    let char = ''
    for (let prop in letterCounts) {
        if (letterCounts[prop] > max) {
            max = letterCounts[prop]
            char = prop
        }
    }
    return char
}

// using Map + for ... of
function maxRecurringChar(text) {
    const map = new Map()
    
    text.split('').forEach(x => {
        if (map.has(x)) {
            let old = map.get(x)
            map.set(x, ++old)
        }
        else
            map.set(x, 1)
    })
    
    maxChar = {char: '', charCount: 0}
    for (let [letter, letterCount] of map) {
		if (letterCount > maxChar.charCount) {
            maxChar.char = letter
            maxChar.charCount = letterCount
        }
    }
    
    return maxChar.char
}


module.exports = maxRecurringChar;