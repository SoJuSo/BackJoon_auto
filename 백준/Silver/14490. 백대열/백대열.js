// https://www.acmicpc.net/problem/14490

let fs = require("fs");
// let input = fs.readFileSync("e.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

//아이디어
//최대공약수 구해서 나눠서 출력형식에 맞추어 출력

//1번째 제출 시간초과
//해결법 - 유클리드 호제법
const arr = input[0].split(":");
const n = arr[0];
const m = arr[1];

function cal(a, b) {
  if (b == 0) return a;
  return cal(b, a % b);
}

let gcd = cal(n, m);

console.log(`${n / gcd}:${m / gcd}`);
