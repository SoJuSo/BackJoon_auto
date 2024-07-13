// https://www.acmicpc.net/problem/12437

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input.map((v) => v.split(" ").map(Number));

const sol = (n, arr) => {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    const [totalMonth, daysPerMonth, daysPerWeek] = arr[i - 1];
    let result = 0;
    let cnt = 0;

    for (let j = 0; j < totalMonth; j++) {
      if ((daysPerMonth + cnt) % daysPerWeek === 0) {
        result += Math.floor((daysPerMonth + cnt) / daysPerWeek);
      } else {
        result += Math.floor((daysPerMonth + cnt) / daysPerWeek) + 1;
        cnt = (daysPerMonth + cnt) % daysPerWeek;
      }
    }

    answer.push(`Case #${i}: ${result}`);
  }

  return answer.join("\n");
};

console.log(sol(N, list));
