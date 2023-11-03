// https://www.acmicpc.net/problem/1003

let fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
const t = Number(input.shift());
const N = input.map(Number);
// console.log(N);

for (let i = 0; i < t; i++) {
  let oneCount = 0,
    zeroCount = 1;

  for (let j = 1; j <= N[i]; j++) {
    const tmpCount = zeroCount;

    zeroCount = oneCount;
    oneCount = tmpCount + oneCount;
  }

  console.log(zeroCount + " " + oneCount);
}

// console.log(dp);
