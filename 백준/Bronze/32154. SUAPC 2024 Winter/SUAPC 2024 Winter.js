// https://www.acmicpc.net/problem/32154

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const table = {
  1: { solved: 11, list: "A B C D E F G H J L M" },
  2: { solved: 9, list: "A C E F G H I L M" },
  3: { solved: 9, list: "A C E F G H I L M" },
  4: { solved: 9, list: "A B C E F G H L M" },
  5: { solved: 8, list: "A C E F G H L M" },
  6: { solved: 8, list: "A C E F G H L M" },
  7: { solved: 8, list: "A C E F G H L M" },
  8: { solved: 8, list: "A C E F G H L M" },
  9: { solved: 8, list: "A C E F G H L M" },
  10: { solved: 8, list: "A B C F G H L M" },
};

console.log(table[input[0]].solved + "\n" + table[input[0]].list);
