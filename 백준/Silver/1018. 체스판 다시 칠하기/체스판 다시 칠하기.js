// https://www.acmicpc.net/problem/1018

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);

const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const count = [];

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    let whiteCount = 0;
    let blackCount = 0;
    for (let a = 0; a < 8; a++) {
      for (let b = 0; b < 8; b++) {
        if (input[a + i][b + j] !== white[a][b]) {
          whiteCount++;
        }
        if (input[a + i][b + j] !== black[a][b]) {
          blackCount++;
        }
      }
    }
    count.push(whiteCount);
    count.push(blackCount);
  }
}

console.log(Math.min(...count));
