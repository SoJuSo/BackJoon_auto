//https://www.acmicpc.net/problem/11866

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// 1 2 3 4 5 6 7
// 1 2 4 5 6 7
// 1 2 4 5 7
// 1 4 5 7
// 1 4 5
// 1 4
// 4

const [N, K] = [Number(input[0].split(" ")[0]), Number(input[0].split(" ")[1])];

const queueArray = new Array(N).fill().map((_, index) => index + 1);
const answerArray = [];

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
