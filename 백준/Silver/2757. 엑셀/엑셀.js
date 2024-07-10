// https://www.acmicpc.net/problem/2757
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const sol = (arr) => {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    let str = "";
    let [row, col] = arr[i].split("C").map((v) => +v.replace("R", ""));
    if (row == 0 && col == 0) break;
    while (col > 0) {
      col--;
      str = String.fromCharCode(65 + (col % 26)) + str;
      col = Math.floor(col / 26);
    }
    answer.push(str + row);
  }
  return answer.join("\n");
};

console.log(sol(input));