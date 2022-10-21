const pigLatin = require('./index-START');

test('pigLatin is a function', () => {
  expect(typeof pigLatin).toEqual('function');
});

test('the consonant before the initial vowel should be moved to the end of the word sequence', () => {
  expect(pigLatin('pig')).toEqual('igpay');
});

test('the clusters should be moved to the end of the word sequence', () => {
  expect(pigLatin('glove')).toEqual('oveglay');
});

test('For words that begin with vowel sounds, simply add "way" to the end of the word.', () => {
  expect(pigLatin('explain')).toEqual('explainway');
});

