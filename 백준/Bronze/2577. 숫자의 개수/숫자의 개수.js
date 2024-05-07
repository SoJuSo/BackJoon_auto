//https://www.acmicpc.net/problem/2577

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const [A, B, C] = [Number(input.shift()), Number(input.shift()), Number(input.shift())];
const str = String(A * B * C);
const answer = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

for (token of str) {
  answer[token]++;
}

// console.log(answer);

for (value in answer) {
  console.log(answer[value]);
}
