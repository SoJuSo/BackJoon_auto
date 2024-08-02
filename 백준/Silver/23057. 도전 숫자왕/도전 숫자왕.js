// https://www.acmicpc.net/problem/23057

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input.shift().split(" ").map(Number);

function getCombinations(arr, n) {
  let result = [];
  if (n === 1) return arr.map((x) => [x]);
  arr.forEach((value, index) => {
    let smallerCombs = getCombinations(arr.slice(index + 1), n - 1);
    smallerCombs.forEach((comb) => {
      result.push([value, ...comb]);
    });
  });
  return result;
}

const sol = (n, arr) => {
  const answer = new Set();

  for (let i = 1; i <= n; i++) {
    let combs = getCombinations(arr, i);
    combs.forEach((comb) => {
      let sum = comb.reduce((a, b) => a + b, 0);
      answer.add(sum);
    });
  }

  return arr.reduce((acc, cur) => acc + cur, 0) - answer.size;
};

console.log(sol(N, list));
