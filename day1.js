const fs = require("fs");

const input = fs.readFileSync("./input/d1", "utf-8").split("\n");

const numMap = new Map();

numMap.set("one", 1);
numMap.set("two", 2);
numMap.set("three", 3);
numMap.set("four", 4);
numMap.set("five", 5);
numMap.set("six", 6);
numMap.set("seven", 7);
numMap.set("eight", 8);
numMap.set("nine", 9);

function getDigits(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[0-9]/)) {
      result += str[i];
    }
  }
  return result;
}

input.forEach((line) => {});
console.log(numMap.entries());
