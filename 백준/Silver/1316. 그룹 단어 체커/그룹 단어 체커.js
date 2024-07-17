// https://www.acmicpc.net/problem/1316

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const T = +input.shift();

const sol = (n, arr) => {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const cur = {};
    arr[i].split("").forEach((val, index) => {
      if (cur[val] === undefined) cur[val] = 1;
      else {
        if (cur[val] && arr[i][index] !== arr[i][index - 1]) {
          cur[val]++;
        }
      }
    });
    const dup = [...new Set(Object.values(cur))];
    dup.length === 1 && dup[0] === 1 ? ans++ : 0;
  }
  return ans;
};

console.log(sol(T, input));
