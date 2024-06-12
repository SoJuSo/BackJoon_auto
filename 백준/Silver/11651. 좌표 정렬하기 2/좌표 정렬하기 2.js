// https://www.acmicpc.net/problem/11651

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

input.shift();

console.log(
  input
    .sort((a, b) => {
      if (a.split(" ")[1] === b.split(" ")[1]) {
        return a.split(" ")[0] - b.split(" ")[0];
      } else return a.split(" ")[1] - b.split(" ")[1];
    })
    .join("\n")
);
