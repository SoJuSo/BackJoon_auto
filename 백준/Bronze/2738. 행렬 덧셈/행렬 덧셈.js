//https://www.acmicpc.net/problem/2738

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);

const sol = (n, m) => {
  const prevArr = [];
  const nextArr = [];

  for (let i = 0; i < n; i++) {
    prevArr.push(input[i].split(" ").map(Number));
  }

  for (let i = n; i < n * 2; i++) {
    nextArr.push(input[i].split(" ").map(Number));
  }

  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++) {
      prevArr[j][k] += nextArr[j][k];
    }
  }

  return prevArr;
};

const answer = [];
sol(N, M).forEach((val) => {
  answer.push(val.join(" ").trim());
});

console.log(answer.join("\n"));
