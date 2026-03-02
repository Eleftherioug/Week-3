const fs = require('fs');
const path = require('path');

// Count total words
function countWords(filePath) {
  const text = fs.readFileSync(path.resolve(filePath), 'utf-8');
  const words = text.split(/\s+/).filter(Boolean);
  return words.length;
}

// Find the longest word
function findLongestWord(filePath) {
  const text = fs.readFileSync(path.resolve(filePath), 'utf-8');
  const words = text.split(/\s+/).filter(Boolean);
  return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
}

// Count number of lines
function countLines(filePath) {
  const text = fs.readFileSync(path.resolve(filePath), 'utf-8');
  return text.split('\n').length;
}

// Example usage
console.log(countWords('data/quotes.txt'));
console.log(findLongestWord('data/quotes.txt'));
console.log(countLines('data/quotes.txt'));

// Export functions
module.exports = { countWords, findLongestWord, countLines };