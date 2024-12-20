// https://www.acmicpc.net/problem/10103

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  // 구현`);
  let 창영 = 100,
    성덕 = 100;

  list.forEach((val) => {
    const [창, 성] = val.split(" ").map(Number);
    if (창 === 성) {
    } else if (창 > 성) {
      성덕 -= 창;
    } else {
      창영 -= 성;
    }
  });
  return 창영 + "\n" + 성덕;
};

console.log(sol(N, input));
