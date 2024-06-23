// https://www.acmicpc.net/problem/28691

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const obj = {
  M: "MatKor",
  W: "WiCys",
  C: "CyKor",
  A: "AlKor",
  $: "$clear",
};

console.log(obj[input[0]]);
