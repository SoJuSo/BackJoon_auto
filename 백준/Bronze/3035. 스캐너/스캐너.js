// https://www.acmicpc.net/problem/3035

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [R, C, ZR, ZC] = input.shift().split(" ").map(Number);

const sol = (row, col, zrow, zcol, arr) => {
  const answer = [];
  for (let i = 0; i < row; i++) {
    let cur = "";
    if (zcol > 1) {
      cur = arr[i].split("").reduce((acc, cur) => acc + cur.repeat(zcol), "");
    } else {
      cur = arr[i];
    }

    for (let j = 0; j < zrow; j++) {
      answer.push(cur);
    }
  }
  return answer.join("\n");
};

console.log(sol(R, C, ZR, ZC, input));
