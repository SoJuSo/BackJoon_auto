// https://www.acmicpc.net/submit/1254

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const sol = (s) => {
  const n = s.length;
  let answer = n;

  let reverse = s.split("").reverse().join("");

  for (let i = 0; i < n; i++) {
    let flag = true;
    for (let j = 0; j < n - i; j++) {
      if (s[i + j] !== reverse[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      answer += i;
      break;
    }
  }
  return answer;
};

console.log(sol(input[0]));
