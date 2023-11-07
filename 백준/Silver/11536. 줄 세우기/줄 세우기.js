// https://www.acmicpc.net/problem/11536
/*
let fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().split("\r\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);

const N = Number(input.shift());
// console.log(input);
// const nameList = Array.from(input, String); // input을 그대로 사용하자
const diffChecker = (prev, next) => {
  return JSON.stringify(prev) === JSON.stringify(next);
};

const orderChecker = (list) => {
  //   console.log(list);
  //   console.log(list, "??");
  const increasing = [...list].sort((a, b) => (a > b ? 1 : -1));
  //   console.log(increasing);
  // 원본 배열이 바뀌어서
  const decreasing = [...list].sort((a, b) => (a > b ? -1 : 1));

  //   console.log(list, increasing, decreasing);
  if (diffChecker(list, increasing)) {
    return "INCREASING";
  } else if (diffChecker(list, decreasing)) {
    return "DECREASING";
  } else {
    return "NEITHER";
  }
};

console.log(orderChecker(input));
// console.log(input);
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 여기에 풀이 작성
  const N = Number(input.shift());
  // console.log(input);
  // const nameList = Array.from(input, String); // input을 그대로 사용하자
  const diffChecker = (prev, next) => {
    return JSON.stringify(prev) === JSON.stringify(next);
  };

  const orderChecker = (list) => {
    //   console.log(list);
    //   console.log(list, "??");
    const increasing = [...list].sort((a, b) => (a > b ? 1 : -1));
    //   console.log(increasing);
    // 원본 배열이 바뀌어서
    const decreasing = [...list].sort((a, b) => (a > b ? -1 : 1));

    //   console.log(list, increasing, decreasing);
    if (diffChecker(list, increasing)) {
      return "INCREASING";
    } else if (diffChecker(list, decreasing)) {
      return "DECREASING";
    } else {
      return "NEITHER";
    }
  };

  console.log(orderChecker(input));
  // console.log(input);
});
