/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/


// For ... of Loop
function whereIBelong(arr, num) {
   let index = 0
   for (const x of arr) {
       num > x && index++
   }
   return index
}

// Filter method
function whereIBelong(arr, num) {
   return arr.filter(x => num > x).length
}


module.exports = whereIBelong