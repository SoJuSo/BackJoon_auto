//https://www.acmicpc.net/problem/16430

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

console.log(
  Number(input[0].split(" ")[1]) - Number(input[0].split(" ")[0]) + " " + input[0].split(" ")[1]
);
