// https://www.acmicpc.net/problem/1141

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num, arr) => {
  let check = Array(num).fill(true);

  arr.sort();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].startsWith(arr[i])) {
        check[i] = false;
        break;
      }
    }
  }

  let ans = check.filter((c) => c).length;
  return ans;
};

console.log(sol(N, input));
