//https://www.acmicpc.net/problem/29751

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [A, B, C] = input.shift().split(" ").map(Number);
console.log(A + B === C ? `correct!` : `wrong!`);
