// https://www.acmicpc.net/problem/1874

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n, arr) => {
  const answer = [];
  const stack = [];
  let num = 1;

  for (let i = 0; i < n; i++) {
    let cur = arr[i];

    while (num <= cur) {
      // console.log(num, cur);
      stack.push(num);
      num++;
      answer.push("+");
    }

    // console.log(stack);
    const stackPop = stack.pop();
    answer.push("-");

    if (stackPop !== cur) {
      return "NO";
    }
  }

  return answer.join("\n");
};

console.log(sol(N, input.map(Number)));
