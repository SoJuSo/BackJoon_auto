// https://www.acmicpc.net/problem/2530

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [A, B, C] = input.shift().split(" ").map(Number);
const D = +input.shift();

const sol = (h, m, s, t) => {
  let a = -1,
    b = -1,
    c = -1;

  if (t % 60 !== 0) {
    c = t % 60;
  }

  if (Math.floor(t / 60) !== 0) {
    if (Math.floor(t / 60) > 59) {
      b = Math.floor(t / 60) % 60;
      a = Math.floor(t / 3600);
    } else {
      b = Math.floor(t / 60);
    }
  }

  if (c > -1) {
    s += c;
  }
  if (s > 59) {
    s -= 60;
    m++;
  }

  if (b > -1) {
    m += b;
  }
  if (m > 59) {
    m -= 60;
    h++;
  }

  if (a > -1) {
    h += a;
  }
  if (h > 23) {
    h %= 24;
  }

  return `${h} ${m} ${s}`;
};

console.log(sol(A, B, C, D));
