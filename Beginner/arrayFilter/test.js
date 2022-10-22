const arrayFilter = require('./index-START')

test('arrayFilter is a function', () => {
  expect(typeof arrayFilter).toEqual('function')
})

test('works with test function isString', () => {
  function isString(item) {
    return typeof item === 'string'
  }
  expect(arrayFilter([1, 2, 3, 4, '5', 6, 7], isString)).toEqual('5')
})

test('returns undefined when no element satisfies test function', () => {
  function isEven(num) {
    return num % 2 === 0
  }
  expect(arrayFilter([1, 3, 5, 7, 9, 11], isEven)).toEqual(undefined)
})