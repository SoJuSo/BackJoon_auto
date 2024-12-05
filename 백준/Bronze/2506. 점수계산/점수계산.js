// https://www.acmicpc.net/problem/2506

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  let status = 0,
    answer = 0;
  for (let i = 0; i < pcs; i++) {
    if (list[i] > 0) {
      answer += list[i] + status;
      status++;
    } else {
      status = 0;
    }
  }
  return answer;
};

console.log(sol(N, input.shift().split(" ").map(Number)));
