// https://www.acmicpc.net/problem/2798

let fs = require("fs");
// let input = fs.readFileSync("example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
// 아이디어
// N개의 카드가 있고 총 3개를 골랐을 때 3개의 합이 M을 넘지 않는 최대의 수를 구하라

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
// console.log(N);
// console.log(M);
// console.log(arr);

let temp = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      const calNum = arr[i] + arr[j] + arr[k];
      if (calNum > temp && calNum <= M) {
        temp = calNum;
      }
    }
  }
}

console.log(temp);
