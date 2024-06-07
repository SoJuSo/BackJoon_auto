//https://www.acmicpc.net/problem/16189

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const s = input.shift();

const str = s;

if (str.length % 2 === 0) {
  console.log(
    str.slice(0, str.length / 2) ===
      str
        .slice(str.length / 2, str.length)
        .split("")
        .reverse()
        .join("")
      ? "YES"
      : "NO"
  );
} else {
  console.log(
    str.slice(0, str.length / 2) ===
      str
        .slice(str.length / 2 + 1, str.length)
        .split("")
        .reverse()
        .join("")
      ? "YES"
      : "NO"
  );
}
