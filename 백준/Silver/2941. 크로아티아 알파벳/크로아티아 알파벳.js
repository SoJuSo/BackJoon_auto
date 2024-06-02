//https://www.acmicpc.net/problem/2941

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

console.log(
  input[0]
    .replaceAll("c=", 1)
    .replaceAll("c-", 1)
    .replaceAll("dz=", 1)
    .replaceAll("d-", 1)
    .replaceAll("lj", 1)
    .replaceAll("nj", 1)
    .replaceAll("s=", 1)
    .replaceAll("z=", 1).length
);
