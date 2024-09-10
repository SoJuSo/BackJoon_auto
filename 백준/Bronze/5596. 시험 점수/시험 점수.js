// https://www.acmicpc.net/problem/5596
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  const min = arr[0].split(" ").reduce((acc, cur) => acc + +cur, 0);
  const man = arr[1].split(" ").reduce((acc, cur) => acc + +cur, 0);

  return min > man ? min : man;
};

console.log(sol(input));
