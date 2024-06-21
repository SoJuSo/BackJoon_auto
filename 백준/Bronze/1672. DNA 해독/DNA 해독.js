// https://www.acmicpc.net/problem/1672

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

input.shift();
let str = input.shift();

const dnaHash = {
  AA: "A",
  AG: "C",
  AC: "A",
  AT: "G",
  GA: "C",
  GG: "G",
  GC: "T",
  GT: "A",
  CA: "A",
  CG: "T",
  CC: "C",
  CT: "G",
  TA: "G",
  TG: "A",
  TC: "G",
  TT: "T",
};

let newStr = dnaHash[`${str[str.length - 2]}${str[str.length - 1]}`];
// console.log(newStr);
for (let i = str.length - 3; i >= 0; i--) {
  newStr = dnaHash[`${str[i]}${newStr}`];
  // console.log(newStr);
}

console.log(newStr ? newStr : str);
