// https://www.acmicpc.net/problem/20310

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (str) => {
  const cur = str.split("");
  let one = cur.reduce((acc, cur) => (cur === "1" ? acc + 1 : acc), 0) / 2;
  let zero = cur.reduce((acc, cur) => (cur === "0" ? acc + 1 : acc), 0) / 2;

  const checkErase = new Array(cur.length).fill(false);

  for (let i = cur.length - 1; i >= 0; i--) {
    if (zero === 0) break;
    if (cur[i] === "0") {
      checkErase[i] = true;
      zero--;
    }
  }

  for (let i = 0; i < cur.length; i++) {
    if (one === 0) break;
    if (cur[i] === "1") {
      checkErase[i] = true;
      one--;
    }
  }

  let ans = "";
  for (let i = 0; i < cur.length; i++) {
    if (!checkErase[i]) {
      ans += cur[i];
    }
  }

  return ans;
};

console.log(sol(input.shift()));
