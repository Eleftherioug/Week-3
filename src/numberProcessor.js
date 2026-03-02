const fs = require('fs');
const path = require('path');

// Read numbers from file
function readNumbers(filePath) {
  const data = fs.readFileSync(path.resolve(filePath), 'utf-8');
  return data.split('\n').filter(Boolean).map(Number);
}

// Sum all numbers
function sumNumbers(filePath) {
  return readNumbers(filePath).reduce((a, b) => a + b, 0);
}

// Find min
function minNumber(filePath) {
  return Math.min(...readNumbers(filePath));
}

// Find max
function maxNumber(filePath) {
  return Math.max(...readNumbers(filePath));
}

// Calculate average
function averageNumber(filePath) {
  const numbers = readNumbers(filePath);
  return sumNumbers(filePath) / numbers.length;
}

// Example usage
console.log(sumNumbers('data/sample-numbers.txt'));
console.log(minNumber('data/sample-numbers.txt'));
console.log(maxNumber('data/sample-numbers.txt'));
console.log(averageNumber('data/sample-numbers.txt'));

// Export functions
module.exports = { sumNumbers, minNumber, maxNumber, averageNumber };