// https://www.acmicpc.net/problem/23301

const fs = require("fs");
// const input = fs.readFileSync("./0_example.txt").toString().split("\r\n"); //vscode
const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 백준

const [N, T] = input[0].split(" ");
input.shift();

let array = new Array(1000).fill(0);
// let array = [];
// console.log(input);

// for (let i = 0; i < N; i++) {
//   const time = input.shift();
//   for (let j = 0; j < time; j++) {
//     const table = input.shift();
//     for (let l = Number(table.split(" ")[0]); l < Number(table.split(" ")[1]); l++) {
//       if (array[l] === undefined) {
//         array[l] = 1;
//       } else {
//         array[l]++;
//       }
//     }
//   }
// }

input.forEach((item) => {
  if (item.length === 1) return;
  const [from, to] = item.split(" ").map(Number);
  for (let t = from; t < to; t++) {
    array[t] += 1;
  }
});

// console.log(array);

let startTime = [0, 0]; // 시작한 시간, 그때의 최대값
let timeSum = 0;

for (let k = 0; k < array.length; k++) {
  for (let a = k; a < Number(T) + k; a++) {
    timeSum += array[a];
  }
  if (startTime[1] < timeSum) {
    startTime[0] = k;
    startTime[1] = timeSum;
  }
  timeSum = 0;
}

console.log(startTime[0], startTime[0] + Number(T));
