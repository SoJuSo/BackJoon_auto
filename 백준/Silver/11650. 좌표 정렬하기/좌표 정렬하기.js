//https://www.acmicpc.net/problem/11650

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = Number(input.shift());

console.log(
  input
    .sort((a, b) => {
      const [Ax, Ay] = a.split(" ");
      const [Bx, By] = b.split(" ");

      if (Ax === Bx) {
        return Ay - By;
      } else {
        return Ax - Bx;
      }
    })
    .join("\n")
);
