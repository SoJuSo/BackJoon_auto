// https://www.acmicpc.net/problem/4949

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  const answer = [];
  const bracket = {
    "[": 1,
    "]": 1,
    "(": 1,
    ")": 1,
  };

  arr.forEach((str) => {
    const cur = str.split("");
    const stack = [];
    cur.forEach((word, idx) => {
      if (bracket[word]) {
        stack.push(word);
        if (stack[stack.length - 1] === "]" && stack[stack.length - 2] === "[") {
          stack.pop();
          stack.pop();
        }

        if (stack[stack.length - 1] === ")" && stack[stack.length - 2] === "(") {
          stack.pop();
          stack.pop();
        }
      }

      if (idx === cur.length - 1) {
        if (stack.length === 0 && cur[idx] === ".") answer.push("yes");
        else answer.push("no");
      }
    });
  });

  answer.pop();
  return answer.join("\n");
};

console.log(sol(input));
