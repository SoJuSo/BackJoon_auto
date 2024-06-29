// https://www.acmicpc.net/problem/17264

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [_, P] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const [W, L, G] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const player = {};
for (let i = 0; i < P; i++) {
  const [name, wol] = input.shift().split(" ");
  player[name] = wol;
}

let sum = 0;
for (const name of input) {
  if (player[name] === "W") {
    sum += W;
  } else if (player[name] === "L") {
    sum -= L;
  } else {
    sum -= L;
  }

  if (sum >= G) {
    break;
  }

  if (sum < 0) {
    sum = 0;
  }
}

console.log(sum >= G ? "I AM NOT IRONMAN!!" : "I AM IRONMAN!!");
