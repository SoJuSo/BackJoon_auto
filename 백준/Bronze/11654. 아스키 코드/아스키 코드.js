// https://www.acmicpc.net/problem/11654

let fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().split("\r\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);

console.log(input[0].charCodeAt(0));
