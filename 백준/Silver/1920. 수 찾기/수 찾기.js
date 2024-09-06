// https://www.acmicpc.net/problem/1920

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const Narr = input.shift().split(" ");
const M = +input.shift();
const Marr = input.shift().split(" ");

const sol = (listnum, listarr, targetnum, targetarr) => {
  const answer = [];

  const obj = {};
  listarr.forEach((val) => {
    obj[val] === undefined ? (obj[val] = 1) : 0;
  });

  targetarr.forEach((val) => {
    obj[val] ? answer.push(1) : answer.push(0);
  });

  return answer.join("\n");
};

console.log(sol(N, Narr, M, Marr));
