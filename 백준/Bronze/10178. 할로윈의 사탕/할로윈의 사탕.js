// https://www.acmicpc.net/problem/10178

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = input.shift();

const sol = (pcs, list) => {
  // 아이디어
  const answer = [];
  list.forEach((val) => {
    const cur = val.split(" ").map(Number);
    answer.push(
      `You get ${Math.floor(cur[0] / cur[1])} piece(s) and your dad gets ${
        cur[0] % cur[1]
      } piece(s).`
    );
  });
  return answer.join("\n");
};

console.log(sol(N, input));
