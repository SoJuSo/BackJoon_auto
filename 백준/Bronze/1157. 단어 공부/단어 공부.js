//https://www.acmicpc.net/problem/1157

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const str = input.shift().toUpperCase();

const answer = new Object();

for (const token of str.split("")) {
  if (answer[token] === undefined) {
    answer[token] = 1;
  } else {
    answer[token]++;
  }
}

let result = "";
let count = 0;

for (char in answer) {
  if (answer[char] > count) {
    count = answer[char];
    result = char.toUpperCase();
  } else if (answer[char] === count) {
    result = "?";
  }
}
console.log(result);
