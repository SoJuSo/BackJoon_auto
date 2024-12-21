// https://www.acmicpc.net/problem/11006

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  const answer = [];
  list.forEach((val) => {
    const [legs, heads] = val.split(" ").map(Number);
    answer.push(`${heads * 2 - legs} ${legs - heads}`);
  });
  return answer.join("\n");
};

console.log(sol(N, input));
