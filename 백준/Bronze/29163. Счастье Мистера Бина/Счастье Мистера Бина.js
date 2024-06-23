// https://www.acmicpc.net/problem/29163

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const n = +input.shift();
const list = input.shift().split(" ").map(Number);

let odd = 0,
  even = 0;

list.forEach((val) => (val % 2 === 0 ? even++ : odd++));

console.log(even > odd ? "Happy" : "Sad");
