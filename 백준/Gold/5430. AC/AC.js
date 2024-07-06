// https://www.acmicpc.net/problem/5430

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const n = +input.shift();

const sol = (TC, arr) => {
  const answer = [];
  for (let i = 0; i < TC; i++) {
    const p = arr.shift();
    const num = +arr.shift();
    const list = arr[0]
      .slice(1, arr[0].length - 1)
      .split(",")
      .filter((e) => e !== "")
      .map(Number);
    arr.shift();

    let status = true; // 정방향
    let start = 0,
      end = 0,
      total = 0;

    p.split("").forEach((v) => {
      if (v === "R") {
        status = !status;
      } else if (v === "D") {
        total++;
        if (status) {
          start++;
        } else {
          end++;
        }
      }
    });

    if (total > num) {
      answer.push("error");
    } else {
      const result = list.slice(start, list.length - end);
      answer.push("[" + (status ? result : result.reverse()).join(",") + "]");
    }
  }

  return answer.join("\n");
};
console.log(sol(n, input));
