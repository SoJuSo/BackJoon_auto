// https://www.acmicpc.net/problem/11728

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);

const sol = (a, b, A, B) => {
  // 아이디어
  // 정렬인데 이미 정렬됐다.
  // shift()를 쓰면 느리니 pop으로 쓰고 뒤집자.
  // 시초가 아니라 메모리 초과가 났다..? 그러면 기억하면 안된다..?
  // 그러면 시점을 기억하자
  return A.concat(B)
    .sort((a, b) => a - b)
    .join(" ");
};

console.log(sol(N, M, input[0].split(" ").map(Number), input[1].split(" ").map(Number)));
