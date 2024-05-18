//https://www.acmicpc.net/problem/10816

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = Number(input[0]);
const cards = input[1].split(" ");
const cardList = {};
for (let i = 0; i < N; i++) {
  if (cardList[cards[i]] === undefined) {
    cardList[cards[i]] = 1;
  } else {
    cardList[cards[i]] += 1;
  }
}

const answer = [];
const M = Number(input[2]);
const cardChecker = input[3].split(" ");
for (let i = 0; i < M; i++) {
  if (cardList[cardChecker[i]]) {
    answer.push(cardList[cardChecker[i]]);
  } else {
    answer.push(0);
  }
}

console.log(answer.join(" "));
