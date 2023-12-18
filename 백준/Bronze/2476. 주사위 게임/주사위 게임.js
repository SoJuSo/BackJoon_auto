// https://www.acmicpc.net/problem/2476

const fs = require("fs");
// const input = fs.readFileSync("./0_example.txt").toString().split("\r\n"); //vscode
const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 백준

// console.log(input);

const [N, Array] = [Number(input.shift()), input];

let answer = 0;

for (let i = 0; i < N; i++) {
  const arr = Array[i].split(" ").map(Number);
  //   console.log(arr);
  const uniquearr = arr.filter((el, index) => {
    return arr.indexOf(el) === index;
  });
  let temp_answer = 0;
  switch (uniquearr.length) {
    case 1:
      temp_answer = 10000 + uniquearr[0] * 1000;
      if (answer < temp_answer) answer = temp_answer;
      break;
    case 2:
      let cal_num = 0;
      if (arr[0] === arr[1]) {
        cal_num = arr[0];
      } else if (arr[0] === arr[2]) {
        cal_num = arr[0];
      } else {
        cal_num = arr[1];
      }
      temp_answer = 1000 + cal_num * 100;
      if (answer < temp_answer) answer = temp_answer;
      break;
    case 3:
      const biggest = Math.max(...uniquearr);
      temp_answer = biggest * 100;
      if (answer < temp_answer) answer = temp_answer;
      break;
    default:
      break;
  }
}

console.log(answer);
