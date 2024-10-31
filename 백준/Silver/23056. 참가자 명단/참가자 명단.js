// https://www.acmicpc.net/problem/23056

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);
input.pop();

const sol = (_class, people, list) => {
  // 아이디어
  const even = [];
  const odd = [];
  const obj = {};
  for (let i = 0; i < list.length; i++) {
    if (obj[list[i][0]] === undefined) {
      if (+list[i][0] % 2 === 0) {
        even.push(list[i]);
      } else {
        odd.push(list[i]);
      }
      obj[list[i][0]] = 1;
    } else {
      if (obj[list[i][0]] < people) {
        if (+list[i][0] % 2 === 0) {
          even.push(list[i]);
        } else {
          odd.push(list[i]);
        }
        obj[list[i][0]]++;
      }
    }
  }

  return (
    odd
      .sort((a, b) => {
        if (a[0] === b[0]) {
          if (a[1].length === b[1].length) {
            return a[1][0].charCodeAt() - b[1][0].charCodeAt();
          } else {
            return a[1].length - b[1].length;
          }
        } else {
          return a[0] - b[0];
        }
      })
      .map((v) => v.join(" "))
      .join("\n") +
    (odd.length > 0 ? "\n" : "") +
    even
      .sort((a, b) => {
        if (a[0] === b[0]) {
          if (a[1].length === b[1].length) {
            return a[1][0].charCodeAt() - b[1][0].charCodeAt();
          } else {
            return a[1].length - b[1].length;
          }
        } else {
          return a[0] - b[0];
        }
      })
      .map((v) => v.join(" "))
      .join("\n")
  );
};

console.log(
  sol(
    N,
    M,
    input.map((v) => v.split(" ")).sort((a, b) => +a[0] - +b[0])
  )
);
