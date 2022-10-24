/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
	if (n < 1)
		throw new Error('n must be bigger then zero')
	
    let sequence = [1, 1]
    for (let i = 1; i < n; i++) {
		sequence.push(
			sequence[i] + sequence[i - 1]
		)
	}
    return sequence[n]
}

module.exports = fibonacci