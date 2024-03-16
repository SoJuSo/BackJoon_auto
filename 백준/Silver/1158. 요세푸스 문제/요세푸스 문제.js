// https://www.acmicpc.net/problem/1158

const fs = require("fs");
// const input = fs.readFileSync("./0_example.txt").toString().split("\r\n"); //vscode
const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 백준

// console.log(input);
const [N, K] = [Number(input[0].split(" ")[0]), Number(input[0].split(" ")[1])];

const queueArray = new Array(N).fill().map((_, index) => index + 1);
const answerArray = new Array();

let answerCounter = 0;
let currentIndex = 0;

while (answerArray.length !== N) {
  if (queueArray[currentIndex] !== 0) answerCounter++;
  if (answerCounter % K === 0 && queueArray[currentIndex] !== 0) {
    answerArray.push(queueArray[currentIndex]);
    queueArray[currentIndex] = 0;
    answerCounter = 0;
  }

  currentIndex++;

  if (currentIndex === N) currentIndex = 0;
}

console.log("<" + answerArray.join(", ") + ">");
