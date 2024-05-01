// https://www.acmicpc.net/problem/1021

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

// console.log(input);
const [N, M] = input.shift().split(" ").map(Number);
const targetArray = input.shift().split(" ").map(Number);

// console.log(N, M);
// console.log(targetArray);

const Queue = Array.from({ length: N })
  .fill()
  .map((_, i) => {
    return i + 1;
  });
// console.log(Queue);

let answer = 0;

// for (let i = 0; i < M; i++) {
//   const target = targetArray.shift();
//   while (1) {
//     console.log(target, Queue[0], answer);
//     console.log(Queue);
//     if (target === Queue[0]) {
//       Queue.shift();
//       break;
//     } else if (target > Queue[0]) {
//       const first = Queue.shift();
//       Queue.push(first);
//       answer++;
//     } else if (target < Queue[0]) {
//       const last = Queue.pop();
//       Queue.unshift(last);
//       answer++;
//     }
//   }
// }
// console.log(answer);

for (let i = 0; i < M; i++) {
  const target = targetArray.shift();
  while (1) {
    // console.log(target, Queue[0], answer);
    // console.log(Queue);
    if (target === Queue[0]) {
      Queue.shift();
      break;
    } else {
      let targetIndex = Queue.indexOf(target);
      //   console.log("타겟 위치", targetIndex);
      let middle = Queue.length / 2;
      //   console.log(`중간점`, targetIndex <= middle, middle);
      if (targetIndex <= middle) {
        // console.log(targetIndex);
        const first = Queue.shift();
        Queue.push(first);
        answer++;
      } else {
        const last = Queue.pop();
        Queue.unshift(last);
        answer++;
      }
    }
  }
}
console.log(answer);
