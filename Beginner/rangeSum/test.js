const rangeSum = require('./index-START')

test('rangeSum is a function', () => {
    expect(typeof rangeSum).toEqual('function');
});

test('rangesum returns correct sum', () => {
    expect(rangeSum([1, 9])).toEqual(45);
});


test('rangesum returns correct sum for dynamic end points', () => {
    expect(rangeSum([4, 6])).toEqual(15);
});