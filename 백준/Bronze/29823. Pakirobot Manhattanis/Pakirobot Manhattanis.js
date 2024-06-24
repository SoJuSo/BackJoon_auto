// https://www.acmicpc.net/problem/29823

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const location = input.shift();

let row = 0,
  col = 0;

for (let i = 0; i < N; i++) {
  switch (location[i]) {
    case "N":
      col++;
      break;
    case "S":
      col--;
      break;
    case "E":
      row++;
      break;
    case "W":
      row--;
      break;
  }
}

console.log(Math.abs(row) + Math.abs(col));
