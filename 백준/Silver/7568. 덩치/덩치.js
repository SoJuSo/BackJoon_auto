// https://www.acmicpc.net/problem/7568

let fs = require("fs");
// let input = fs.readFileSync("example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
//아이디어

const N = Number(input[0]);

// console.log(N);
const answer = [];
for (let i = 1; i <= N; i++) {
  let temp = 1;
  const [x1, y1] = input[i].split(" ").map(Number);
  for (let j = 1; j <= N; j++) {
    const [x2, y2] = input[j].split(" ").map(Number);
    if (i !== j) {
      if (x1 < x2 && y1 < y2) {
        temp++;
      }
    }
  }
  answer.push(temp);
  //   console.log(temp);
}

console.log(answer.join(" "));
