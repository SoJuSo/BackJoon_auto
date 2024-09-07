// https://www.acmicpc.net/problem/10570

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n, arr) => {
  const answer = [];
  for (let tc = 0; tc < n; tc++) {
    const V = +arr.shift();
    const S = arr.splice(0, V);

    const obj = {};
    S.forEach((val) => {
      obj[val] === undefined ? (obj[val] = 1) : obj[val]++;
    });

    answer.push(
      Object.entries(obj).sort((a, b) => {
        if (a[1] === b[1]) {
          return a[0] - [b];
        }
        return b[1] - a[1];
      })[0][0]
    );
  }

  return answer.join("\n");
};

console.log(sol(N, input));
