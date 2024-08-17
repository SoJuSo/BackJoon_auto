// https://www.acmicpc.net/problem/11098

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n, arr) => {
  const answer = [];
  for (let tc = 0; tc < n; tc++) {
    const cur = +arr.shift();
    answer.push(
      input
        .splice(0, cur)
        .map((v) => v.split(" "))
        .sort((a, b) => +b[0] - +a[0])[0][1]
    );
  }
  return answer.join("\n");
};

console.log(sol(N, input));
