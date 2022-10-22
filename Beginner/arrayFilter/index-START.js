/* CHALLENGE
Return the first element from the given array that passes the test specified by the provided function. 
Both the array and function are passed into the function as arguments as shown below:
*/



// find method
function arrayFilter(arr, func) {
  return arr.find(func)
}

// for ... of loop
function arrayFilter(arr, func) {
  let solution = undefined
  for (const element of arr) {
    if (func(element))
      solution = element
  }
  return solution
}


module.exports = arrayFilter