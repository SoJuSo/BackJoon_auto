// https://www.acmicpc.net/problem/1075

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = ([N, F]) => {
  let modified = Math.floor(N / 100) * 100;
  for (let i = 0; i < 100; i++) {
    if ((modified + i) % F === 0) {
      return String(i).padStart(2, "0");
    }
  }
};

console.log(sol(input.map(Number)));
