// https://www.acmicpc.net/problem/10797

let fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
const N = Number(input[0]);
const Array = input[1].split(" ").map(Number);

let answer = 0;
Array.forEach((element) => {
  element === N ? answer++ : 0;
});
console.log(answer);
