// https://www.acmicpc.net/problem/28295

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  // 아이디어
  // 초기에는 N
  // 하드코딩밖에 없나?
  const dir = ["N", "E", "S", "W"];
  let cur = 0;

  list.forEach((turn) => {
    switch (turn) {
      case 1:
        cur = (cur + 1) % 4;
        break;
      case 2:
        cur = (cur + 2) % 4;
        break;
      case 3:
        cur = (cur + 3) % 4;
        break;
    }
  });

  return dir[cur];
};

console.log(sol(input.map(Number)));
