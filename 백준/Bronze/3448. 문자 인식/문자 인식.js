//https://www.acmicpc.net/problem/3448

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const TC = parseInt(input.shift());
const answer = [];

for (let i = 0; i < TC; i++) {
  let totalChars = 0;
  let markedChars = 0;

  while (true) {
    let S = input.shift();
    if (S === undefined || S === "") {
      break;
    }
    totalChars += S.length;
    markedChars += (S.match(/#/g) || []).length;
  }

  let efficiency = ((totalChars - markedChars) / totalChars) * 100;
  efficiency = Math.round(efficiency * 10) / 10; // Round to one decimal place

  if (efficiency % 1 === 0) {
    answer.push(`Efficiency ratio is ${parseInt(efficiency)}%.`);
  } else {
    answer.push(`Efficiency ratio is ${efficiency.toFixed(1)}%.`);
  }
}

console.log(answer.join("\n"));
