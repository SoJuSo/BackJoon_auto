//https://www.acmicpc.net/problem/1259

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

while (1) {
  const str = input.shift();
  if (str === "0") break;

  if (str.length % 2 === 0) {
    console.log(
      str.slice(0, str.length / 2) ===
        str
          .slice(str.length / 2, str.length)
          .split("")
          .reverse()
          .join("")
        ? "yes"
        : "no"
    );
  } else {
    console.log(
      str.slice(0, str.length / 2) ===
        str
          .slice(str.length / 2 + 1, str.length)
          .split("")
          .reverse()
          .join("")
        ? "yes"
        : "no"
    );
  }
}
