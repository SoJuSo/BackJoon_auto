// https://www.acmicpc.net/problem/14557

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  return arr[0]
    .split(" ")
    .reduce((acc, cur) => {
      const ans = [];
      ans.push((+acc * +cur) / 2);
      ans.push(+acc * +cur - 1);
      return ans;
    })
    .join(" ");
};

console.log(sol(input));
