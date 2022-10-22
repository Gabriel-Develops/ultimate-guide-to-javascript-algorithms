// IMPERATIVE APPROACH
function arrayFilter(arr, func) {
    for (let elem of arr) {
      if (func(elem)) {
        return elem
      }
    }
    return undefined
}


// USING .FILTER()

function arrayFilter(arr, func) {
    let filteredArray = arr.filter(func);
    return filteredArray[0] ? filteredArray[0] : undefined;
}


// USING .FIND()


function arrayFilter(arr, func) {
    return arr.find(func)
}
  
