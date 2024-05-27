//https://www.acmicpc.net/problem/4101

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const answer = [];
input.forEach((val) => {
  const [A, B] = val.split(" ").map(Number);
  A !== 0 && B !== 0 ? (A > B ? answer.push("Yes") : answer.push("No")) : null;
});
console.log(answer.join("\n"));
