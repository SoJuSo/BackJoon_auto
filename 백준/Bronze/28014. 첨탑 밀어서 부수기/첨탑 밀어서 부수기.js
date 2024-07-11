// https://www.acmicpc.net/problem/28014

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input[0].split(" ").map(Number);

const sol = (arr) => {
  let answer = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      answer++;
    }
  }
  return answer;
};

console.log(N - sol(list));
