// https://www.acmicpc.net/problem/15686

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [n, m] = input.shift().split(" ").map(Number);

const cords = input.map((v) => v.split(" ").map(Number));

const getCombinations = (arr, k) => {
  let results = [];
  if (k === 1) {
    return arr.map((e) => [e]);
  }
  arr.forEach((current, index) => {
    const remaining = arr.slice(index + 1);
    const combinations = getCombinations(remaining, k - 1);
    const attached = combinations.map((combination) => [current, ...combination]);
    results = results.concat(attached);
  });
  return results;
};

const sol = (num, chicken, arr) => {
  let answer = Infinity;
  const houses = [];
  const kfc = [];
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (arr[i][j] === 1) {
        houses.push([i, j]);
      } else if (arr[i][j] === 2) {
        kfc.push([i, j]);
      }
    }
  }

  getCombinations(kfc, chicken).forEach((chi) => {
    let temp = 0;
    houses.forEach((h) => {
      let chi_len = Infinity;
      chi.forEach((c) => {
        chi_len = Math.min(chi_len, Math.abs(h[0] - c[0]) + Math.abs(h[1] - c[1]));
      });
      temp += chi_len;
    });
    answer = Math.min(answer, temp);
  });

  return answer;
};
console.log(sol(n, m, cords));
