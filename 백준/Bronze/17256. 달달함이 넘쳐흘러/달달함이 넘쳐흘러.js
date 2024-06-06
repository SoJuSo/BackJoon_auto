//https://www.acmicpc.net/problem/17256

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const a = {
  x: Number(input[0].split(" ")[0]),
  y: Number(input[0].split(" ")[1]),
  z: Number(input[0].split(" ")[2]),
};

const c = {
  x: Number(input[1].split(" ")[0]),
  y: Number(input[1].split(" ")[1]),
  z: Number(input[1].split(" ")[2]),
};

console.log(c.x - a.z, c.y / a.y, c.z - a.x);
