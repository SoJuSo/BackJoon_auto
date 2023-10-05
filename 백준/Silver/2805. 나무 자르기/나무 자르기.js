let fs = require("fs");
// let input = fs.readFileSync("example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
const N = input[0].split(" ")[0]; // 나무의 수
const M = input[0].split(" ")[1]; // 가져가려는 나무의 총 길이
const arr = input[1].split(" ").map((val) => {
  return Number(val); //숫자로 변환
});
arr.sort((a, b) => {
  return a - b;
});
//아이디어
//이분탐색

// console.log(arr);
let min = 0;
let max = arr[N - 1];
let answer = 0;
while (min <= max) {
  let sum = 0;
  let mid = Math.floor((max + min) / 2);
  for (const val of arr) {
    if (val >= mid) {
      sum += val - mid;
    }
  }
  if (sum >= M) {
    if (mid > answer) {
      answer = mid;
    }
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(answer);
