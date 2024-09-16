// https://www.acmicpc.net/problem/1620

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, K] = input.shift().split(" ").map(Number);

const sol = (Name, target, arr) => {
  // 아이디어
  // 구현!
  const answer = [];
  const list = {};
  const pocketmon = arr.slice(0, Name);

  pocketmon.forEach((val, idx) => {
    list[val] = idx + 1;
  });

  arr.slice(Name).forEach((val) => {
    if (!isNaN(val)) {
      answer.push(pocketmon[+val - 1]);
    } else {
      answer.push(list[val]);
    }
  });

  return answer.join("\n");
};

console.log(sol(N, K, input));
