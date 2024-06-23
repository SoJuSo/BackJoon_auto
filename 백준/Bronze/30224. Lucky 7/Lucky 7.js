// https://www.acmicpc.net/problem/30224

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const n = +input.shift();

if (!String(n).includes(7) && n % 7 !== 0) {
  console.log(0);
} else if (!String(n).includes(7) && n % 7 === 0) {
  console.log(1);
} else if (String(n).includes(7) && n % 7 !== 0) {
  console.log(2);
} else {
  console.log(3);
}
