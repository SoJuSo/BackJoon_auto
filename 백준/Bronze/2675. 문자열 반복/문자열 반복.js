// https://www.acmicpc.net/problem/2675

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

// console.log(input);
const TC = Number(input.shift());

for (let i = 0; i < TC; i++) {
  const [Round, string] = input.shift().split(" ");
  let answer = "";
  for (let j = 0; j < string.length; j++) {
    answer += string[j].repeat(Round);
  }
  console.log(answer);
}
