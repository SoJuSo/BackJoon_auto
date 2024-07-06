//https://www.acmicpc.net/problem/26510

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const list = input.shift().split(" ").map(Number);
const answer = [];

for (const val of list) {
  for (let i = val; i > 0; i--) {
    let str = "";
    str = " ".repeat(Math.abs(val - i)) + "*";

    for (let j = 2; j <= i * 2 - 1; j++) {
      if (j === i * 2 - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    answer.push(str);
  }
}

console.log(answer.join("\n"));
