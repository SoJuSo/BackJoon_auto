// https://www.acmicpc.net/problem/31844

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  // 아이디어
  // 문자열
  const robot = arr.indexOf("@");
  const box = arr.indexOf("#");
  const target = arr.indexOf("!");
  // console.log(box, robot, target);
  if (
    (robot < target && arr.slice(robot + 1, target).includes("#")) ||
    (robot > target && arr.slice(target + 1, robot).includes("#"))
  ) {
    return Math.abs(robot - target) - 1;
  } else {
    return -1;
  }
};

console.log(sol(input[0].split("")));
