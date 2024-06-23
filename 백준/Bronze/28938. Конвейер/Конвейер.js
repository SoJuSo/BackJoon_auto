// https://www.acmicpc.net/problem/28938

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const n = +input.shift();
const list = input.shift().split(" ").map(Number);

let cur = 0;
for (let i = 0; i < n; i++) {
  cur += list[i];
}

console.log(cur === 0 ? "Stay" : cur < 0 ? "Left" : "Right");
