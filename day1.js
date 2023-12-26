const fs = require("fs");

const input = fs
  .readFileSync("./input/d1.txt", "utf-8")
  .split("\n")
  .map((line) => line.trim(""));

function getDigits(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[0-9]/)) {
      result += str[i];
    }
  }
  return result;
}

function replaceNumberSubstring(inputString) {
  const numberMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  // Replace all occurrences of the keys of numberMap with their values;
  // Remember edge cases
}

let sum = 0;

input.forEach((line) => {
  console.log(line);
  const numberString = replaceNumberSubstring(line);
  console.log(numberString);
  const digits = getDigits(numberString);
  console.log(digits);
  let number = parseInt(digits[0] + digits[digits.length - 1]);
  if (isNaN(number)) {
    number = 0;
  }
  console.log(number, "\n");
  sum += number;
});

console.log("Sum: ", sum);
