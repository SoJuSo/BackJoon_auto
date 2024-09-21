// https://www.acmicpc.net/problem/14425

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);

const sol = (pcs, target, arr) => {
  // 아이디어
  const list = new Set();
  arr.slice(0, pcs).forEach((val) => {
    list.add(val);
  });

  let cnt = 0;
  arr.slice(pcs).forEach((val) => {
    if (list.has(val)) {
      cnt++;
    }
  });

  return cnt;
};

console.log(sol(N, M, input));
