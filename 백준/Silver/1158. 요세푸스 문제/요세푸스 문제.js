// https://www.acmicpc.net/problem/1158

const fs = require("fs");
// const input = fs.readFileSync("./0_example.txt").toString().split("\r\n"); //vscode
const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 백준

// console.log(input);
const [N, K] = [Number(input[0].split(" ")[0]), Number(input[0].split(" ")[1])];

// console.log(N, K);

let queueArray = new Array(N).fill().map((_, index) => index + 1);
let answerArray = new Array();

// console.log(queueArray);
let answerCounter = 0;

while (1) {
  queueArray.map((val, index) => {
    if (val !== 0) answerCounter++;

    if (answerCounter % K === 0) {
      if (val !== 0) answerArray.push(queueArray[index]);
      queueArray[index] = 0;
      answerCounter = 0;
    }
  });

  // 종료 조건
  if (answerArray.length === N) break;
}

console.log("<" + answerArray.join(", ") + ">");
