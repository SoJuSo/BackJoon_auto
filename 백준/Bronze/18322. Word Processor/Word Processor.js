// https://www.acmicpc.net/problem/1672

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, K] = input.shift().split(" ").map(Number);
const words = input.shift().split(" ");

const answer = [];
let word = [];

for (let i = 0; i < N; i++) {
  if ((word.join("") + words[i]).length > K) {
    answer.push(word.join(" "));
    word = [];
  }
  if (!word.length) {
    word.push(words[i]);
  } else {
    word.push(`${words[i]}`);
  }
}

if (word.length) {
  answer.push(word.join(" "));
}
console.log(answer.join("\n"));
