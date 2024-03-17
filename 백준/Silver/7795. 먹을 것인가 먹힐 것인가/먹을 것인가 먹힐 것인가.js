// https://www.acmicpc.net/problem/7795

const fs = require("fs");
// const input = fs.readFileSync("./0_example.txt").toString().split("\r\n"); //vscode
const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 백준

// console.log(input);

const TotalCaseCount = Number(input.shift());

// console.log(TotalCaseCount, input);

for (let i = 0; i < TotalCaseCount; i++) {
  let answerCouneter = 0;
  const currentCase = input.shift().split(" ").map(Number);
  const [aCounter, bCounter] = [currentCase[0], currentCase[1]];
  const [currentA, currentB] = [
    input
      .shift()
      .split(" ")
      .map(Number)
      .sort((a, b) => b - a),
    input
      .shift()
      .split(" ")
      .map(Number)
      .sort((a, b) => b - a),
  ];

  //   console.log(currentA, currentB);

  for (let j = 0; j < aCounter; j++) {
    for (let k = 0; k < bCounter; k++) {
      if (currentA[j] > currentB[k]) {
        answerCouneter++;
      }
    }
  }
  console.log(answerCouneter);
}
