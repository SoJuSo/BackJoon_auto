// https://www.acmicpc.net/problem/8892

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const TC = +input.shift();

const isPelindrom = (str) => {
  let result = false;

  if (str.length % 2 === 1) {
    result =
      str.substr(0, str.length / 2) ==
      str
        .substr(str.length / 2 + 1, str.length)
        .split("")
        .reverse()
        .join("");
  } else {
    result =
      str.substr(0, str.length / 2) ==
      str
        .substr(str.length / 2, str.length)
        .split("")
        .reverse()
        .join("");
  }

  return result;
};

const sol = (tc, arr) => {
  // 정답은 가능한 경우 중 아무거나 출력하면 됌
  // 단어의 수는 100개, 1초 이므로 시공간복잡도 상관없이 브루트포스로 구현
  const answer = [];

  for (let a = 0; a < TC; a++) {
    const wordLen = +arr.shift();
    const currentWords = arr.splice(0, wordLen);
    let status = false;

    for (let i = 0; i < wordLen; i++) {
      for (let j = 0; j < wordLen; j++) {
        if (i === j) continue;
        if (isPelindrom(currentWords[i] + currentWords[j])) {
          answer.push(currentWords[i] + currentWords[j]);
          status = true;
          break;
        }
      }
      if (status) break;
    }

    !status && answer.push(0);
  }

  return answer.join("\n");
};

console.log(sol(TC, input));
