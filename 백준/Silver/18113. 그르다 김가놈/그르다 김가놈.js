//https://www.acmicpc.net/problem/18113

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, K, M] = input.shift().split(" ").map(Number);

const goodKimbap = [];
let answer = -1;

// O(n)
for (let i = 0; i < N; i++) {
  const kimbap = Number(input[i]); // shift() 사용시 O(n^2)
  if (kimbap > K * 2) {
    goodKimbap.push(kimbap - K * 2);
  } else if (kimbap - K > 0 && kimbap < K * 2) {
    goodKimbap.push(kimbap - K);
  }
}

// goodKimbap.sort((a, b) => a - b);

if (!goodKimbap.length) {
  console.log(-1);
} else {
  let first = 1,
    last = 10 ** 9; // 9007199254740992
  while (first <= last) {
    const mid = Math.floor((first + last) / 2);
    const total = goodKimbap.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

    if (total < M) {
      last = mid - 1;
    } else {
      first = mid + 1;
      answer = Math.max(mid, answer);
    }
  }
  console.log(answer);
}
