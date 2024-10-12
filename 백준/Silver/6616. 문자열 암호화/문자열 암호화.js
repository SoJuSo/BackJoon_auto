// https://www.acmicpc.net/problem/6616

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  // 아이디어
  // 구현
  const answer = [];
  for (let i = 0; i < arr.length - 1; i += 2) {
    const curLen = +arr[i];
    const curText = arr[i + 1].split(" ").join("").toUpperCase();
    const temp = [];

    let idx = 0;

    for (let a = 0; a < curLen; a++) {
      for (let b = a; b < curText.length; b += curLen) {
        temp[b] = curText[idx];
        idx++;
      }
    }
    answer.push(temp.join("").trim());
  }
  return answer.join("\n");
};

console.log(sol(input));
