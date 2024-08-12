// https://www.acmicpc.net/problem/14670

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  const medicine = {};
  const medicine_num = +list.shift();

  for (let i = 0; i < medicine_num; i++) {
    const cur = list.shift().split(" ").map(Number);
    medicine[cur[0]] = cur[1];
  }

  const answer = [];
  const symptom_num = +list.shift();

  for (let i = 0; i < symptom_num; i++) {
    const cur = list.shift().split(" ").map(Number);
    let str = [];
    for (let j = 1; j <= cur[0]; j++) {
      if (medicine[cur[j]] !== undefined) {
        str.push(medicine[cur[j]]);
      } else if (medicine[cur[j]] === undefined) {
        str = ["YOU DIED"];
        break;
      }
    }
    answer.push(str.length === 1 ? str[0] : str.join(" "));
  }

  return answer.join("\n");
};

console.log(sol(input));
