//https://www.acmicpc.net/problem/5220

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const TC = Number(input.shift());

for (let i = 0; i < TC; i++) {
  const [cur, val] = input.shift().split(" ").map(Number);
  console.log(
    cur
      .toString(2)
      .split("")
      .reduce((acc, cur) => (cur == "1" ? acc + 1 : acc), 0) %
      2 ===
      val
      ? "Valid"
      : "Corrupt"
  );
}
