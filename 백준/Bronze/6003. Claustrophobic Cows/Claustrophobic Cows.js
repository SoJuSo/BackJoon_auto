// https://www.acmicpc.net/problem/6003

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input.map((v) => v.split(" ").map(Number));

const sol = (n, arr) => {
  let answer = Infinity;
  let ans = [0, 0];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let distance = Math.hypot(arr[i][0] - arr[j][0], arr[i][1] - arr[j][1]);
      if (distance < answer) {
        answer = distance;
        ans = [i + 1, j + 1];
      }
    }
  }

  return ans.join(" ");
};

console.log(sol(N, list));
