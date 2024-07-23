// https://www.acmicpc.net/problem/20546

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const cal = (cash, stock, cnt) => cash + stock * cnt;

const sol = (num, arr) => {
  let sung_cash = num,
    jun_cash = num,
    sung_cur = 0,
    jun_cur = 0;
  arr.unshift(0);

  for (let i = 1; i < arr.length; i++) {
    // 준현 case
    if (jun_cash >= arr[i]) {
      jun_cur += Math.floor(jun_cash / arr[i]);
      jun_cash = jun_cash % arr[i];
    }

    // console.log(jun_cash, jun_cur);

    // 성민 case
    if (i > 2) {
      if (arr[i - 3] > arr[i - 2] && arr[i - 2] > arr[i - 1]) {
        sung_cur += Math.floor(sung_cash / arr[i]);
        sung_cash = sung_cash % arr[i];
      } else if (arr[i - 3] < arr[i - 2] && arr[i - 2] < arr[i - 1]) {
        if (sung_cur > 0) {
          sung_cash = sung_cash + sung_cur * arr[i];
          sung_cur = 0;
        }
      }
    }
  }

  const sung = cal(sung_cash, arr[arr.length - 1], sung_cur);
  const jun = cal(jun_cash, arr[arr.length - 1], jun_cur);

  if (sung === jun) {
    return "SAMESAME";
  } else if (sung > jun) {
    return "TIMING";
  } else {
    return "BNP";
  }
};

console.log(sol(N, input.shift().split(" ").map(Number)));
