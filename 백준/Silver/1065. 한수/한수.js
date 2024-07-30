// https://www.acmicpc.net/problem/1065

let fs = require("fs");
// let input = fs.readFileSync("e.txt").toString().split("\r\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

const N = Number(input[0]);
let answer = 0;

for (let i = 1; i <= N; i += 1) {
  const arr = String(i).split("");
  let TF = true;

  let diff_1 = arr[1] - arr[0];
  for (let j = 0; j < arr.length; j++) {
    if (arr.length <= 2) {
      break;
    } else {
      if (j > 0) {
        let diff_2 = arr[j] - arr[j - 1];
        diff_1 != diff_2 ? (TF = false) : 0;
      }
    }
  }

  TF ? answer++ : 0;
}

console.log(answer);
