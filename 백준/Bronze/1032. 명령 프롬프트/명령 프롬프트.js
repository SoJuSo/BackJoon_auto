// https://www.acmicpc.net/problem/1032

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

let str = "";
for (let i = 0; i < input[0].length; i++) {
  let cur = input[0][i];
  let status = false;
  for (let j = 1; j < N; j++) {
    if (input[j][i] !== cur) status = true;
  }
  status ? (str += "?") : (str += input[0][i]);
}
console.log(str);
