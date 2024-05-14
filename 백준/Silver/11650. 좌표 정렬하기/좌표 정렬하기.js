//https://www.acmicpc.net/problem/11650

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = Number(input.shift());

const list = [];

input.forEach((val) => {
  list.push(val.split(" ").map(Number));
});

list.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

console.log(list.map((val) => val.join(" ")).join("\n"));
