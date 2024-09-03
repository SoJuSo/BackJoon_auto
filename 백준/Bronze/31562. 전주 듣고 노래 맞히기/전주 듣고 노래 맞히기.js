// https://www.acmicpc.net/problem/31562

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);

const sol = (n, m, arr) => {
  const obj = {};
  const answer = [];
  arr.splice(0, n).forEach((val) => {
    const cur = val.split(" ").slice(1);
    const temp = cur.shift();
    obj[cur.join("")] = temp;
  });

  const songs = Object.entries(obj);

  arr.forEach((val) => {
    const cur = val.split(" ").join("");
    let cnt = 0;
    let song = "";
    songs.forEach((val) => {
      if (val[0].slice(0, 3) === cur) {
        song = val[1];
        cnt++;
      }
    });

    if (cnt === 0) {
      answer.push("!");
    } else if (cnt === 1) {
      answer.push(song);
    } else {
      answer.push("?");
    }
  });

  return answer.join("\n");
};

console.log(sol(N, M, input));
