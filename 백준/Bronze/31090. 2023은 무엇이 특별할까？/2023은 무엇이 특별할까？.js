// https://www.acmicpc.net/problem/31090

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, arr) => {
  // 아이디어
  // 구현
  const answer = [];

  arr.forEach((val) =>
    (+val + 1) % +val.slice(2) === 0 ? answer.push("Good") : answer.push("Bye")
  );

  return answer.join("\n");
};

console.log(sol(N, input));
