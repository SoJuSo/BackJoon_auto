// https://www.acmicpc.net/problem/6616

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  // 아이디어
  // 구현
  const answer = [];
  for (let tc = 0; tc < arr.length - 1; tc += 2) {
    const curN = +arr[tc];
    const curText = arr[tc + 1].split(" ").join("").toUpperCase();

    const temp = [];
    let idx = 0;

    for (let i = 0; i < curN; i++) {
      for (let j = i; j < curText.length; j += curN) {
        temp[j] = curText[idx];
        idx++;
      }
    }
    answer.push(temp.join(""));
  }
  return answer.join("\n");
};

console.log(sol(input));
