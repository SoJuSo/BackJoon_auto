//https://www.acmicpc.net/problem/2839

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const N = Number(input.shift());

/*
 */
// for문으로도 풀리긴하는듯?
const solution = (num) => {
  const maxThree = num / 3;
  const maxFive = num / 5;
  //   console.log(maxFive, maxThree);
  for (let i = 0; i <= maxThree; i++) {
    for (let j = 0; j <= maxFive; j++) {
      if (i * 3 + j * 5 === num) {
        // console.log(i, j);
        console.log(i + j);
        return;
      }
    }
  }
  // 아무것도 출력이 안될 경우
  console.log(-1);
  return;
};
solution(N);