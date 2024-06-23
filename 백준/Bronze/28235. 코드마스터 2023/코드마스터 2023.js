// https://www.acmicpc.net/problem/28235

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

switch (input[0]) {
  case "SONGDO":
    console.log(`HIGHSCHOOL`);
    break;
  case "CODE":
    console.log(`MASTER`);
    break;
  case "2023":
    console.log(`0611`);
    break;
  case "ALGORITHM":
    console.log(`CONTEST`);
    break;
}
