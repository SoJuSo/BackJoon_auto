// https://www.acmicpc.net/problem/20437

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num, arr) => {
  const answer = [];
  for (let i = 0; i < num; i++) {
    const w = arr.shift();
    const k = +arr.shift();
    const obj = {};
    let lenList = [];

    w.split("").forEach((v, i) => {
      obj[v] === undefined ? (obj[v] = [i]) : obj[v].push(i);
    });
    const filtered = Object.entries(obj).filter((v) => v[1].length >= k);

    if (filtered.length === 0) {
      answer.push(-1);
    } else {
      for (let alpha in filtered) {
        const current = filtered[alpha][1];

        if (current.length === k) {
          let firstIdx = current[0];
          let lastIdx = current[k - 1];
          lenList.push(lastIdx - firstIdx + 1);
        } else {
          for (let i = 0; i < current.length - k + 1; i++) {
            lenList.push(current[i + k - 1] - current[i] + 1);
          }
        }
      }
      answer.push(`${Math.min(...lenList)} ${Math.max(...lenList)}`);
    }
  }
  return answer.join("\n");
};

console.log(sol(N, input));
