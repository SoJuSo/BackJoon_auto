// https://www.acmicpc.net/problem/1920

let fs = require("fs");
// let input = fs.readFileSync("example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
const N = Number(input[0]);
const N_arr = input[1].split(" ").map(Number);
const M = Number(input[2]);
const M_arr = input[3].split(" ").map(Number);

N_arr.sort((a, b) => a - b);

// console.log(N, M, N_arr, M_arr);

// console.log();
const binarySerach = (array, target) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (target === array[mid]) {
      return true;
    } else {
      if (target > array[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return false;
};

const answer = [];
for (let i = 0; i < M; i++) {
  binarySerach(N_arr, M_arr[i]) ? answer.push(1) : answer.push(0);
}

console.log(answer.join(" "));
