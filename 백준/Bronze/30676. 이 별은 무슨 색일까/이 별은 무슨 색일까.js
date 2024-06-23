// https://www.acmicpc.net/problem/30676

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

if (input[0] >= 620) {
  console.log("Red");
} else if (input[0] >= 590) {
  console.log("Orange");
} else if (input[0] >= 570) {
  console.log("Yellow");
} else if (input[0] >= 495) {
  console.log("Green");
} else if (input[0] >= 450) {
  console.log("Blue");
} else if (input[0] >= 425) {
  console.log("Indigo");
} else {
  console.log("Violet");
}
