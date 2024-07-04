// https://www.acmicpc.net/problem/2608

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const a = input[0];
const b = input[1];

const key = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let sum = 0;

function calculateSum(roman) {
  let localSum = 0;
  for (let i = 0; i < roman.length; i++) {
    if (key[roman[i]] < key[roman[i + 1]]) {
      localSum -= key[roman[i]];
    } else {
      localSum += key[roman[i]];
    }
  }
  return localSum;
}

sum += calculateSum(a);
sum += calculateSum(b);

console.log(sum);

let result = "";

while (sum !== 0) {
  if (sum >= 1000) {
    result += "M";
    sum -= 1000;
  } else if (sum >= 900) {
    result += "CM";
    sum -= 900;
  } else if (sum >= 500) {
    result += "D";
    sum -= 500;
  } else if (sum >= 400) {
    result += "CD";
    sum -= 400;
  } else if (sum >= 100) {
    result += "C";
    sum -= 100;
  } else if (sum >= 90) {
    result += "XC";
    sum -= 90;
  } else if (sum >= 50) {
    result += "L";
    sum -= 50;
  } else if (sum >= 40) {
    result += "XL";
    sum -= 40;
  } else if (sum >= 10) {
    result += "X";
    sum -= 10;
  } else if (sum >= 9) {
    result += "IX";
    sum -= 9;
  } else if (sum >= 5) {
    result += "V";
    sum -= 5;
  } else if (sum >= 4) {
    result += "IV";
    sum -= 4;
  } else {
    result += "I";
    sum -= 1;
  }
}

console.log(result);
