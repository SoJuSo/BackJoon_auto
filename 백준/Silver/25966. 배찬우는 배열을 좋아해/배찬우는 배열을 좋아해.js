// https://www.acmicpc.net/problem/25966

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [n, m, q] = input.shift().split(" ").map(Number);
const list = [];
const query = [];
for (let i = 0; i < n; i++) {
  list.push(input[i].split(" ").map(Number));
}

for (let i = n; i < n + q; i++) {
  query.push(input[i].split(" ").map(Number));
}

for (let a = 0; a < q; a++) {
  const cur = query[a];
  if (cur.length === 4) {
    list[cur[1]][cur[2]] = cur[3];
  } else {
    const temp = list[cur[1]];
    list[cur[1]] = list[cur[2]];
    list[cur[2]] = temp;
  }
}

console.log(list.map((v) => v.join(" ")).join("\n"));
