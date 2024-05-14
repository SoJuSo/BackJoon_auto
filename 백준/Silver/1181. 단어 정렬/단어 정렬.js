//https://www.acmicpc.net/problem/1181

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = Number(input.shift());
const dupArr = new Set(input);
console.log(
  [...dupArr]
    .sort((a, b) => {
      if (a.length === b.length) {
        return a > b ? 1 : -1;
      } else {
        return a.length - b.length;
      }
    })
    .join("\n")
);
