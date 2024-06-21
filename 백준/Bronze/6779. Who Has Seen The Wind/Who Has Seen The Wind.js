// https://www.acmicpc.net/problem/6779

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath).map(Number);

const [h, M] = [+input.shift(), +input.shift()];

const calculated = (t) => -6 * t ** 4 + h * t ** 3 + 2 * t ** 2 + t;

const sol = () => {
  let t = 1;
  while (t <= M) {
    const result = calculated(t);
    if (result <= 0) {
      return `The balloon first touches ground at hour: ${t}`;
    }
    t++;
  }
  return `The balloon does not touch ground in the given time.`;
};

console.log(sol());
