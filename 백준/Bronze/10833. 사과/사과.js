// https://www.acmicpc.net/problem/10833

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  // 구현
  let answer = 0;
  list.forEach((val) => {
    const [student, apple] = val.split(" ").map(Number);
    answer += apple % student;
  });
  return answer;
};

console.log(sol(N, input));
