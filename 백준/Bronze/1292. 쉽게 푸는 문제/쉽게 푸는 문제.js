// https://www.acmicpc.net/problem/1292

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = ([start, end]) => {
  // 아이디어
  // 수학으로도 가능할 것 같은데 일단 구현
  let cnt = 1;
  const arr = [0];
  while (1) {
    for (let i = 0; i < cnt; i++) {
      arr.push(cnt);
    }
    cnt++;
    if (arr.length > 1000) break;
  }
  return arr.slice(start, end + 1).reduce((acc, cur) => acc + cur, 0);
};

console.log(sol(input.shift().split(" ").map(Number)));
