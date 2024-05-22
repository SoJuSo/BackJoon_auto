//https://www.acmicpc.net/problem/1009

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const TC = Number(input.shift());

const sol = (cycle, list) => {
  const answer = [];
  for (let i = 0; i < cycle; i++) {
    const [A, B] = list[i].split(" ").map(Number);
    let firstNum = 1;
    for (let j = 0; j < B; j++) {
      firstNum = (firstNum * A) % 10 === 0 ? 10 : (firstNum * A) % 10;
    }
    answer.push(firstNum);
  }

  return answer;
};

console.log(sol(TC, input).join("\n"));
