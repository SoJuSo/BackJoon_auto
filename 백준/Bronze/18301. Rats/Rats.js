//https://www.acmicpc.net/problem/18301

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [n1, n2, n3] = input[0].split(" ").map(Number);

console.log(parseInt(((n1 + 1) * (n2 + 1)) / (n3 + 1) - 1));
