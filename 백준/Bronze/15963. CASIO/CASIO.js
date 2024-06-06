//https://www.acmicpc.net/problem/15963

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input[0].split(" ").map(Number);

console.log(N === M ? 1 : 0);
