// https://www.acmicpc.net/problem/31908

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num, arr) => {
  // N <= 1000
  // 시간복잡도는 충분할듯?
  const list = {};
  arr.forEach((val) => {
    const [name, ring] = val.split(" ");
    if (ring !== "-") {
      list[ring] === undefined ? (list[ring] = [name]) : list[ring].push(name);
    }
  });

  const answer = [];
  Object.entries(list).forEach((val) => {
    if (val[1].length === 2) {
      answer.push(val[1].join(" "));
    }
  });

  return answer.length + "\n" + answer.join("\n");
};

console.log(sol(N, input));
