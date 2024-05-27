//https://www.acmicpc.net/problem/10813

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);
const [N, M] = input.shift().split(" ").map(Number);

const list = Array.from(new Array(N), (_, i) => i + 1);

// console.log(input, N, M);

for (let i = 0; i < M; i++) {
  const [curA, curB] = input[i].split(" ").map(Number);
  //   console.log(curA, curB);
  const temp = list[curA - 1];
  list[curA - 1] = list[curB - 1];
  list[curB - 1] = temp;
}

console.log(list.join(" "));
