// https://www.acmicpc.net/problem/26863

const { trace } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath).map(Number);

let [a1, a2, a3, a4, b] = [
  +input.shift(),
  +input.shift(),
  +input.shift(),
  +input.shift(),
  +input.shift(),
];

const target = Math.max(a1, a2, a3, a4);

const sol = () => {
  let status = 1;
  if (a1 === target && a2 === target && a3 === target && a4 === target) return status;

  const arr = [a1, a2, a3, a4];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + b === target) {
      arr[i] = target;
      break;
    }
  }

  // console.log(arr);
  const obj = new Set(arr);
  if ([...obj].length === 1) return 1;
  else return 0;
  // console.log([...obj].length);
};

console.log(sol());
