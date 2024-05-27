//https://www.acmicpc.net/problem/10757

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const A = BigInt(input[0].split(" ")[0]);
const B = BigInt(input[0].split(" ")[1]);
let answer = A + B;
console.log(answer.toString());
