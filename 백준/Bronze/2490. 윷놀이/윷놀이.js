// https://www.acmicpc.net/problem/2490

const fs = require("fs");
// const input = fs.readFileSync("0_example.txt").toString().split("\r\n"); //vscode
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); //백준

// console.log(input);

const sol = (index) => {
  const arr = index.split(" ").map(Number);
  let num = 0;
  arr.map((val) => {
    if (val === 0) num++;
  });
  switch (num) {
    case 0:
      console.log("E");
      break;
    case 1:
      console.log("A");
      break;
    case 2:
      console.log("B");
      break;
    case 3:
      console.log("C");
      break;
    case 4:
      console.log("D");
      break;
  }
};

input.forEach((i) => {
  sol(i);
});
