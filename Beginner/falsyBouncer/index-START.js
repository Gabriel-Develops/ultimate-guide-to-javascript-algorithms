/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

// Filter method
function falsyBouncer(array) {
    return array.filter(x => x)
}

// For Loop
function falsyBouncer(array) {
    const newArray = []
    for (const element of array) {
        element && newArray.push(element)
    }
    return newArray
}


module.exports = falsyBouncer