// https://www.acmicpc.net/problem/28927

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const max = input.shift().split(" ").map(Number);
const mel = input.shift().split(" ").map(Number);

const maxCal = 3 * max[0] + 20 * max[1] + 120 * max[2];
const melCal = 3 * mel[0] + 20 * mel[1] + 120 * mel[2];

console.log(maxCal > melCal ? "Max" : maxCal === melCal ? "Draw" : "Mel");
