const searchReplace = require('./index-START');

test('searchReplace is a function', () => {
  expect(typeof searchReplace).toEqual('function');
});

test('Replaces word correctly', () => {
  expect(searchReplace("He is sleeping on the couch", "sleeping", "sitting")).toEqual("He is sitting on the couch");
});

test('Replaces all instances of word correctly', () => {
    expect(searchReplace("He is sleeping on the couch and is dreaming", "is", "was")).toEqual("He was sleeping on the couch and was dreaming");
  });

test('Keeps capitalization of letters', () => {
  expect(searchReplace("He is SleePing on the couch", "SleePing", "sitting")).toEqual("He is SittIng on the couch");
});
