// https://www.acmicpc.net/problem/11101
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num, arr) => {
  // 아이디어
  // 구현!
  const answer = [];
  for (let tc = 0; tc < num; tc++) {
    const cur = {};
    arr
      .shift()
      .split(",")
      .forEach((val) => {
        const node = val.split(":");
        cur[node[0]] = +node[1];
      });

    const filtered = [];
    arr
      .shift()
      .split("|")
      .forEach((val) => {
        const node = val.split("&");
        const temp = [];
        node.forEach((context) => {
          temp.push(cur[context]);
        });
        filtered.push(Math.max(...temp));
      });

    answer.push(Math.min(...filtered));
  }

  return answer.join("\n");
};

console.log(sol(N, input));
