//https://www.acmicpc.net/problem/6502

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const answer = [];

let i = 1;
while (1) {
  const cur = input.shift();
  if (cur == 0) break;
  const [r, w, l] = cur.split(" ").map(Number);

  r >= Math.sqrt(Math.pow(w / 2, 2) + Math.pow(l / 2, 2))
    ? answer.push(`Pizza ${i} fits on the table.`)
    : answer.push(`Pizza ${i} does not fit on the table.`);
  i++;
}
console.log(answer.join("\n"));
