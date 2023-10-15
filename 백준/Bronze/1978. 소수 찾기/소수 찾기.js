// https://www.acmicpc.net/problem/1978

let fs = require("fs");
// let input = fs.readFileSync("example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
// 아이디어
// 에라토스테네스의 체 개념 이용
// 2,3,5,7 핵심
const N = Number(input[0]);
const NumberList = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const answer = [];

for (let i = 0; i < N; i++) {
  let checker = true;
  const thisNumber = NumberList[i];
  for (let j = 2; j <= Math.sqrt(thisNumber); j++) {
    if (thisNumber % j === 0) {
      checker = false;
    }
  }
  if (checker && thisNumber !== 1) {
    answer.push(thisNumber);
  }
}

// console.log(answer);
console.log(answer.length);
