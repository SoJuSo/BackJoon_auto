// https://www.acmicpc.net/problem/10598

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);
const list = input.splice(0, N).map((v) => v.split(" ").map(Number));
const queries = input.map((v) => v.split(" ").map(Number));

const sol = (n, m, arr, arr2) => {
  const answer = [];
  for (let i = 0; i < m; i++) {
    let cur = 0;
    const [x, y, t] = arr2[i];
    for (let j = 0; j < n; j++) {
      let len = Math.abs(arr[j][0] - arr[j][1]);
      let now = 0;
      if (arr[j][0] < arr[j][1]) {
        if (Math.floor(t / len) % 2 === 0) now = arr[j][0] + (t % len);
        else now = arr[j][1] - (t % len);
      } else {
        if (Math.floor(t / len) % 2 === 0) now = arr[j][0] - (t % len);
        else now = arr[j][1] + (t % len);
      }
      if (x <= now && y >= now) {
        cur++;
      }
    }
    answer.push(cur);
  }

  return answer.join("\n");
};

console.log(sol(N, M, list, queries));
