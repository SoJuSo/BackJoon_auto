// https://www.acmicpc.net/problem/15828

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
input.pop();

const sol = (num, arr) => {
  const router = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      router.shift();
    } else {
      if (router.length < num) {
        router.push(arr[i]);
      }
    }
  }

  return router.length === 0 ? "empty" : router.join(" ");
};

console.log(sol(N, input.map(Number)));
