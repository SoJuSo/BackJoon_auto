// https://www.acmicpc.net/problem/6764

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath).map(Number);

const a = input.map(Number);

if (a[0] > a[1] && a[1] > a[2] && a[2] > a[3]) {
  console.log("Fish Diving");
} else if (a[0] < a[1] && a[1] < a[2] && a[2] < a[3]) {
  console.log("Fish Rising");
} else if (a[0] === a[1] && a[1] === a[2] && a[2] === a[3]) {
  console.log("Fish At Constant Depth");
} else {
  console.log("No Fish");
}
