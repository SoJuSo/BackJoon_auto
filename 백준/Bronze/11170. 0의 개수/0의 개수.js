// https://www.acmicpc.net/problem/11170

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const TC = +input.shift();
const answer = [];
for (let i = 0; i < TC; i++) {
  const [N, M] = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let cnt = 0;
  for (let i = N; i <= M; i++) {
    const cur = i.toString().match(/0/g)?.length;
    if (cur) cnt += cur;
  }
  answer.push(cnt);
}
console.log(answer.join("\n"));
