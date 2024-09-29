// https://www.acmicpc.net/problem/1543

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num) => {
  // 아이디어
  // 30000이니까 2중포문 해도 1초안에 끝날듯
  let max = -1;
  let answer = [];
  for (let i = 0; i <= num; i++) {
    let prev = num;
    let cur = i;
    const slot = [prev, cur];
    while (1) {
      const temp = prev - cur;
      if (temp < 0) break;
      slot.push(temp);
      prev = cur;
      cur = temp;
    }
    if (slot.length > max) {
      max = slot.length;
      answer = slot;
    }
  }

  return `${max}` + "\n" + answer.join(" ");
};

console.log(sol(N));
