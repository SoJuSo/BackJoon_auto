//https://www.acmicpc.net/problem/1152

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const String = input.shift().split(" ");
console.log(String.filter((val) => val !== "").length);
