// https://www.acmicpc.net/problem/28702

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

let num = 0;
let idx = 0;
input.forEach((val, i) => {
  if (!isNaN(val)) {
    num = +val;
    idx = i + 1;
  }
});

switch (idx) {
  case 1:
    num += 3;
    break;
  case 2:
    num += 2;
    break;
  case 3:
    num += 1;
    break;
}

if (num % 3 === 0 && num % 5 === 0) {
  console.log("FizzBuzz");
} else if (num % 3 === 0 && num % 5 !== 0) {
  console.log("Fizz");
} else if (num % 3 !== 0 && num % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(num);
}