//https://www.acmicpc.net/problem/8370

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N1, K1, N2, K2] = input[0].split(" ").map(Number);

console.log(N1 * K1 + N2 * K2);
