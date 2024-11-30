// https://www.acmicpc.net/problem/2857

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  // 아이디어
  const result = list.reduce((acc, cur, idx) => {
    if (cur.includes("FBI")) {
      return [...acc, idx + 1];
    }
    return acc;
  }, []);
  return result.length === 0 ? "HE GOT AWAY!" : result.join(" ");
};

console.log(sol(input));
