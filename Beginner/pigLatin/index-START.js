/*
Translate the provided string to pig latin by following the rules below:

- For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g  
  - "pig" = "igpay"
- For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g  
  - "glove" = "oveglay"
-  For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
  - "explain" = "explainway”
*/

function pigLatin(str) {
  const VOWELS_ARRAY = ['a', 'e', 'i', 'o', 'u']
  const firstVowelIndex = [...str].findIndex(x => VOWELS_ARRAY.includes(x))
  const suffix = firstVowelIndex === 0 ? 'way' : 'ay'

  return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + suffix
}

module.exports = pigLatin;
