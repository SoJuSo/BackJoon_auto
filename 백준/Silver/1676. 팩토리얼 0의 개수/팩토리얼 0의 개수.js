// https://www.acmicpc.net/problem/1676

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const factorial = (num) => {
  if (num <= 1) return 1;
  return BigInt(num) * BigInt(factorial(num - 1));
};

const fac = factorial(N).toString();

let cnt = 0;
for (let i = fac.length; i > 0; i--) {
  if (fac[i - 1] == 0) {
    cnt++;
  } else {
    break;
  }
}
console.log(cnt);
