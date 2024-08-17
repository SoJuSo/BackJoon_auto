// https://www.acmicpc.net/problem/24500

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = BigInt(input.shift());

const sol = (n) => {
  let m = 1n;

  while (m < n) m = m * 2n + 1n;

  if (m == n) {
    console.log(1);
    console.log(n.toString());
  } else {
    console.log(2);
    console.log((m ^ n).toString());
    console.log(n.toString());
  }
};

sol(N);
