// https://www.acmicpc.net/problem/10426

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  const [date, day] = arr[0].split(" ");
  const target = new Date(date);
  target.setDate(target.getDate() + (+day - 1));

  return `${target.getFullYear()}-${String(target.getMonth() + 1).padStart(2, "0")}-${String(target.getDate()).padStart(
    2,
    "0"
  )}`;
};

console.log(sol(input));
