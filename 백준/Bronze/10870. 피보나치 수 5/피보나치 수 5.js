// https://www.acmicpc.net/problem/10870

let fs = require("fs");
// let input = fs.readFileSync("example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
// 아이디어
// 함수 만들어서 풀이
const N = Number(input[0]);

const fibo = (num) => {
  let temp = 0;

  let zero = 0;
  let first = 1;
  if (num === 0) {
    return zero;
  } else if (num === 1) {
    return first;
  } else {
    for (let i = 1; i < num; i++) {
      temp = zero + first;
      zero = first;
      first = temp;
      //   console.log(temp);
    }
    return temp;
  }
};
console.log(fibo(N));
