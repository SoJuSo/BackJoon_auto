// https://www.acmicpc.net/problem/31450

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const nums = input.shift().split(" ").map(Number);
console.log(nums[0] % nums[1] === 0 ? "Yes" : "No");
