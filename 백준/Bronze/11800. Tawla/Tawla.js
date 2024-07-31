// https://www.acmicpc.net/problem/11800

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input.map((v) => v.split(" ").map(Number));

const sol = (n, arr) => {
  const obj = {
    1: "Yakk",
    2: "Doh",
    3: "Seh",
    4: "Ghar",
    5: "Bang",
    6: "Sheesh",
    x1: "Habb Yakk",
    x2: "Dobara",
    x3: "Dousa",
    x4: "Dorgy",
    x5: "Dabash",
    x6: "Dosh",
  };

  const answer = [];

  arr.forEach((val, i) => {
    if (val[0] === val[1]) {
      answer.push(`Case ${i + 1}: ` + obj[`x${val[0]}`]);
    } else {
      if (val[0] === 5 && val[1] === 6) {
        answer.push(`Case ${i + 1}: ` + `${obj[6]} Beesh`);
      } else if (val[0] === 6 && val[1] === 5) {
        answer.push(`Case ${i + 1}: ` + `${obj[6]} Beesh`);
      } else {
        answer.push(
          val[0] > val[1]
            ? `Case ${i + 1}: ` + `${obj[val[0]]} ${obj[val[1]]}`
            : `Case ${i + 1}: ` + `${obj[val[1]]} ${obj[val[0]]}`
        );
      }
    }
  });

  return answer.join("\n");
};

console.log(sol(N, list));