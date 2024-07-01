// https://www.acmicpc.net/problem/4850

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  const answer = [];
  while (list.length) {
    const [N, W, D, total] = input
      .shift()
      .split(" ")
      .map((v) => +v);

    const cur = (W * ((N - 1) * N)) / 2;
    const num = (cur - total) / D;
    if (num === 0) {
      answer.push(N);
    } else {
      answer.push(num);
    }
  }
  return answer;
};

console.log(sol(input).join("\n"));
