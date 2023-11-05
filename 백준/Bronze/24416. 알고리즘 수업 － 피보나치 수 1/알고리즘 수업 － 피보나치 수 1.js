// https://www.acmicpc.net/problem/1427

let fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

const fiboReculsive = (number) => {
  if (number === 1 || number === 2) {
    return 1;
  } else {
    return fiboReculsive(number - 1) + fiboReculsive(number - 2);
  }
};

let count = 0;
const fiboDPArray = [0, 1];
const fiboDP = (number) => {
  if (fiboDPArray[number] !== undefined) {
    return fiboDPArray[number];
  }
  count++;
  fiboDPArray[number] = fiboDP(number - 1) + fiboDP(number - 2);
  return fiboDPArray[number];
};

// console.log(fiboDP(5));
console.log(fiboDP(Number(input[0])), count - 1);
