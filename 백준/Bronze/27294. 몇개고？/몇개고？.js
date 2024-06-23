// https://www.acmicpc.net/problem/27294

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [T, S] = input.shift().split(" ").map(Number);

if (S === 1) {
  console.log(`280`);
} else {
  if (T >= 12 && T <= 16) {
    console.log(`320`);
  } else {
    console.log(`280`);
  }
}
