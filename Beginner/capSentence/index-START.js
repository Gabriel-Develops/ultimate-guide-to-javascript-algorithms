/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
  return text.split(' ')
    .map(x => x[0].toUpperCase() + x.slice(1).toLowerCase())
    .join(' ')
}



module.exports = capSentence