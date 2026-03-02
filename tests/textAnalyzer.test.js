const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

describe('Text Analyzer', () => {
  const filePath = 'data/quotes.txt';

  test('counts total words', () => {
    expect(countWords(filePath)).toBe(108);
  });

  test('finds the longest word', () => {
    expect(findLongestWord(filePath)).toBe('sophistication.');
  });

  test('counts total lines', () => {
    expect(countLines(filePath)).toBe(10);
  });
});