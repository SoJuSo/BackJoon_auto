//https://www.acmicpc.net/problem/3448

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const teamA = input[0].split(" ").map(Number);
const teamB = input[1].split(" ").map(Number);

let scoreA,
  scoreB = 0;

scoreA = teamA[0] * 6 + teamA[1] * 3 + teamA[2] * 2 + teamA[3] * 1 + teamA[4] * 2;
scoreB = teamB[0] * 6 + teamB[1] * 3 + teamB[2] * 2 + teamB[3] * 1 + teamB[4] * 2;

console.log(scoreA + " " + scoreB);
