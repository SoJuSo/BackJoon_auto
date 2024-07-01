// https://www.acmicpc.net/problem/2083

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const answer = [];
while (1) {
  const [name, age, weight] = input.shift().split(" ");
  if (name === "#" && age == 0 && weight == 0) break;

  let str = "";
  if (+age > 17 || +weight >= 80) {
    str = "Senior";
  } else {
    str = "Junior";
  }
  answer.push(`${name} ${str}`);
}
console.log(answer.join("\n"));
