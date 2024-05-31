//https://www.acmicpc.net/problem/2440

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const date = new Date();
console.log(
  date.getFullYear() +
    "\n" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "\n" +
    date.getDate().toString().padStart(2, "0")
);
