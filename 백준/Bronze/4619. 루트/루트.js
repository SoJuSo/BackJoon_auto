// https://www.acmicpc.net/problem/4619

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  const answer = [];
  while (1) {
    const [B, N] = arr.shift().split(" ").map(Number);
    if (B === 0 && N === 0) break;

    let A = 1;
    while (Math.pow(A, N) <= B) {
      A++;
    }
    A--;

    if (Math.abs(Math.pow(A, N) - B) > Math.abs(Math.pow(A + 1, N) - B)) {
      A++;
    }

    answer.push(A);
  }
  return answer.join("\n");
};

console.log(sol(input));
