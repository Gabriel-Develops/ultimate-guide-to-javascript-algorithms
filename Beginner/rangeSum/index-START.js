/*
Given an array of two numbers, return the cummulative sum of the two numbers and all the numbers between them. 
E.g rangeSum([1,9]) // Should return 45 i.e 1+2+3+4+5+6+7+8+9
*/

// Mathematical Solution - Guass Summation
function rangeSum([start, end]) {
  return (start + end) * (end - start + 1) / 2
}

// For Loop
function rangeSum([start, end]) {
  let sum = 0
  for (let i = start; i <= end; i++) {
      sum += i
  }
  return sum
}

// Recursion Method
function rangeSum([start, end]) {
  if (start === end) {
      return end
  } else {
      return start + rangeSum([++start, end])
  }
}

module.exports = rangeSum;
