// https://www.acmicpc.net/problem/2740

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  // 아이디어
  // 행렬 곱 구현
  // 근데 행렬 곱을 모르면 이걸 어캐 구현할까..?
  const [prevN, prevM] = list.shift().split(" ").map(Number);
  const prev_matrix = list.splice(0, prevN).map((v) => v.split(" ").map(Number));
  // console.log(prevN, prevM, prev_matrix);

  const [nextN, nextM] = list.shift().split(" ").map(Number);
  const next_matrix = list.map((v) => v.split(" ").map(Number));
  // console.log(nextN, nextM, next_matrix);

  // 일단 방향 고려 X하고 구현
  const answer = Array.from({ length: prevN }, () => Array(nextM).fill(0));

  for (let i = 0; i < prevN; i++) {
    for (let j = 0; j < nextM; j++) {
      for (let k = 0; k < prevM; k++) {
        answer[i][j] += prev_matrix[i][k] * next_matrix[k][j];
      }
    }
  }

  return answer.map((v) => v.join(" ")).join("\n");
};

console.log(sol(input));
