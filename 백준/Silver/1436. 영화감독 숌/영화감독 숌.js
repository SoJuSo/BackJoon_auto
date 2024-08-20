// https://www.acmicpc.net/problem/1436

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n) => {
  let cnt = 1;
  let number = 667;
  while (cnt !== n) {
    if (String(number).includes("666")) {
      cnt++;
      number++;
    } else number++;
  }

  return number - 1;
};

console.log(sol(N));
