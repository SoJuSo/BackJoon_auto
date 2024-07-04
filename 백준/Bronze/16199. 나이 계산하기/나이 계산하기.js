// https://www.acmicpc.net/problem/16199

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [target, today] = input.map((v) => new Date(v));

const age = today.getFullYear() - target.getFullYear();

let koreanAge = 0;
if (
  today.getMonth() < target.getMonth() ||
  (today.getMonth() === target.getMonth() && today.getDate() < target.getDate())
) {
  koreanAge = age - 1;
} else {
  koreanAge = age;
}

console.log(koreanAge - 1 < 0 ? 0 : koreanAge); // 만
console.log(age + 1); // 세
console.log(age); // 연
