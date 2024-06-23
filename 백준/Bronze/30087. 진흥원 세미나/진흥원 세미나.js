// https://www.acmicpc.net/problem/30676

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const obj = {
  Algorithm: 204,
  DataAnalysis: 207,
  ArtificialIntelligence: 302,
  CyberSecurity: `B101`,
  Network: 303,
  Startup: 501,
  TestStrategy: 105,
};

const answer = [];
for (let i = 0; i < N; i++) {
  answer.push(obj[input[i]]);
}
console.log(answer.join("\n"));
