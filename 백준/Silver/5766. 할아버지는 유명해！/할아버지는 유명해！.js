const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  const answer = [];
  while (1) {
    const [N, M] = arr.shift().split(" ").map(Number);
    if (N == 0 && M == 0) break;

    const cur = arr.splice(0, N).map((v) => v.split(" ").map(Number));
    const list = {};
    cur.forEach((layer) => {
      layer.forEach((val) => {
        if (list[val] === undefined) {
          list[val] = 1;
        } else {
          list[val]++;
        }
      });
    });

    const max = Math.max(...Object.values(list));
    const second = Math.max(...Object.values(list).filter((v) => v !== max));

    const str = [];
    Object.entries(list).forEach((val) => {
      if (val[1] == second) {
        str.push(val[0]);
      }
    });
    answer.push(str.sort((a, b) => a - b).join(" "));
  }

  return answer.join("\n");
};

console.log(sol(input));
