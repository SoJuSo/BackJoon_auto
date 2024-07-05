// https://www.acmicpc.net/problem/9009

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const testcase = +input.shift();

const sol = (TC, list) => {
  const answer = [];
  for (let t = 0; t < TC * 2; t += 2) {
    const [N, K] = list[t].split(" ").map(Number);
    const arr = list[t + 1]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);

    let left = 0;
    let right = N - 1;
    let cnt = 0;
    let min = Infinity;

    while (left < right) {
      const le = arr[left];
      const re = arr[right];

      if (le + re < K) {
        left++;
      } else if (le + re > K) {
        right--;
      } else {
        left++;
        right--;
      }

      if (Math.abs(K - (re + le)) < min) {
        min = Math.abs(K - (re + le));
        cnt = 1;
      } else if (Math.abs(K - (re + le)) == min) {
        cnt++;
      }
    }
    answer.push(cnt);
  }
  return answer.join("\n");
};

console.log(sol(testcase, input));
