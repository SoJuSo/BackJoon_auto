// https://www.acmicpc.net/problem/9711

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n, arr) => {
  const fiboDP = [];
  (fiboDP[0] = 1n), (fiboDP[1] = 1n), (fiboDP[2] = 2n);

  let i = 3;
  while (i < 10001) {
    fiboDP[i] = fiboDP[i - 1] + fiboDP[i - 2];
    i++;
  }

  const answer = [];
  arr.forEach((val, i) => {
    const cur = val.split(" ").map(Number);
    answer.push(`Case #${i + 1}: ${fiboDP[cur[0] - 1] % BigInt(cur[1])}`);
  });

  return answer.join("\n");
};

console.log(sol(N, input));
