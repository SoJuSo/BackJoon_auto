//https://www.acmicpc.net/problem/1929

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const arr = Array(M + 1)
  .fill(true)
  .fill(false, 0, 2);

for (let i = 2; i <= Math.sqrt(M); i++) {
  if (arr[i]) {
    for (let j = i * i; j <= M; j += i) {
      arr[j] = false;
    }
  }
}

const answer = [];
for (let i = N; i <= M; i++) {
  if (arr[i]) answer.push(i);
}
console.log(answer.join("\n"));
