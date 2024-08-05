// https://www.acmicpc.net/problem/31823

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);

const sol = (n, m, arr) => {
  const answer = [];
  let num = {};

  arr.forEach((val) => {
    let max = 0;
    let cur = 0;
    val.split(" ").forEach((token) => {
      if (token === ".") {
        cur++;
      } else {
        if (max < cur) max = cur;
        cur = 0;
      }
    });
    if (num[Math.max(max, cur)] === undefined) num[Math.max(max, cur)] = 1;
    answer.push(`${Math.max(max, cur)} ${val.split(" ")[m]}`);
  });

  answer.unshift(Object.keys(num).length);

  return answer.join("\n");
};

console.log(sol(N, M, input));
