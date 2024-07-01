// https://www.acmicpc.net/problem/12540

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const TC = +input.shift();
const answer = [];
for (let a = 0; a < TC; a++) {
  const M = +input.shift();
  const arr = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let best_before_index = 0,
    best_after_index = 0;
  let best_profit = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const buy = Math.floor(M / arr[i]);
      const current_profit = buy * (arr[j] - arr[i]);

      if (
        current_profit > best_profit ||
        (current_profit === best_profit && arr[i] < arr[best_before_index])
      ) {
        best_profit = current_profit;
        best_before_index = i;
        best_after_index = j;
      }
    }
  }

  if (best_profit === 0) {
    answer.push(`Case #${a + 1}: IMPOSSIBLE`);
  } else {
    answer.push(`Case #${a + 1}: ${best_before_index + 1} ${best_after_index + 1} ${best_profit}`);
  }
}
console.log(answer.join("\n"));
