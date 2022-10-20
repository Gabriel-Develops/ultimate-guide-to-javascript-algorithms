/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    if (stringA.length !== stringB.length) return new Error('Strings must be of same length')

    let totalDiff = 0
    for (let i = 0; i < stringA.length; i++)  {
        if (stringA[i] === stringB[i]) {
        continue
        } else {
        totalDiff += 1
        }
    }
    return totalDiff
}



module.exports = hammingDistance