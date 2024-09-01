// https://www.acmicpc.net/problem/25325

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n, arr) => {
  const obj = {};
  arr
    .shift()
    .split(" ")
    .forEach((val) => {
      if (obj[val] === undefined) {
        obj[val] = 0;
      }
    });

  arr.forEach((val) =>
    val.split(" ").forEach((cur) => {
      obj[cur]++;
    })
  );

  const answer = [];
  Object.entries(obj)
    .sort((a, b) => {
      if (a[1] !== b[1]) {
        return b[1] - a[1];
      } else {
        return a[0] - b[0];
      }
    })
    .forEach((val) => {
      answer.push(`${val[0]} ${val[1]}`);
    });

  return answer.join("\n");
};

console.log(sol(N, input));
