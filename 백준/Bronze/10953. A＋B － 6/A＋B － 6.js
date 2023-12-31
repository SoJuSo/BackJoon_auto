// https://www.acmicpc.net/problem/10953

const fs = require("fs");
// const input = fs.readFileSync("./0_example.txt").toString().split("\r\n"); //vscode
const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 백준

// console.log(Number(input[0]));
const [N, array] = [Number(input.shift()), input];

// console.log(N, array);

for (let i = 0; i < N; i++) {
  const temp = input[i].split(",").map(Number);
  console.log(temp[0] + temp[1]);
}
