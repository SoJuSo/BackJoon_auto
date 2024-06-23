// https://www.acmicpc.net/problem/31429

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const table = {
  1: { solved: 12, pen: 1600 },
  2: { solved: 11, pen: 894 },
  3: { solved: 11, pen: 1327 },
  4: { solved: 10, pen: 1311 },
  5: { solved: 9, pen: 1004 },
  6: { solved: 9, pen: 1178 },
  7: { solved: 9, pen: 1357 },
  8: { solved: 8, pen: 837 },
  9: { solved: 7, pen: 1055 },
  10: { solved: 6, pen: 556 },
  11: { solved: 6, pen: 773 },
};

console.log(table[input[0]].solved, table[input[0]].pen);
