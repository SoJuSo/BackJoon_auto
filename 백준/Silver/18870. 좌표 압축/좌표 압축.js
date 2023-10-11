// https://www.acmicpc.net/problem/18870

let fs = require("fs");
// let input = fs.readFileSync("example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
// 아이디어
// 주어진 배열 순회하면서 조건보다 큰 값 or 작은 값 찾기
// 1차 제출 실패 시간 초과
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
// console.log(N, arr);
let sortedArr = new Set(arr);
sortedArr = [...sortedArr].sort((a, b) => a - b);

let obj = {};
sortedArr.forEach((val, index) => {
  obj[val] = index;
});

// console.log(obj);
const answer = [];
// console.log(sortedArr.indexOf(arr[0]));
// console.log(arr, sortedArr);
arr.map((val) => {
  answer.push(obj[val]);
});
// for (let i = 0; i < arr.length; i++) {
//   const temp = [];
//   for (let j = 0; j < arr.length; j++) {
//     if (i !== j) {
//       if (arr[i] > arr[j] && !temp.includes(arr[j])) {
//         temp.push(arr[j]);
//       }
//     }
//   }
//   answer.push(temp.length);
// }
console.log(answer.join(" "));
