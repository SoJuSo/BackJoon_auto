//https://www.acmicpc.net/problem/1817

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);

let answer = 0;
if (N == 0) {
  console.log(answer);
} else {
  const list = input.shift().split(" ").map(Number);
  let box = 0;
  for (let i = 0; i < N; i++) {
    if (box + list[i] > M) {
      box = list[i];
      answer++;
    } else {
      box += list[i];
    }
  }
  if (box > 0) answer++;
  console.log(answer);
}
