// https://www.acmicpc.net/problem/2170

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const T = +input.shift();

// 스위핑을 사용해야함, 사용하지 않아서 메모리 초과

const sol = (n, arr) => {
  arr.sort((a, b) => a[0] - b[0]);

  let start = arr[0][0];
  let end = arr[0][1];
  let totalLength = 0;

  for (let i = 1; i < n; i++) {
    if (arr[i][0] <= end) {
      end = Math.max(end, arr[i][1]);
    } else {
      totalLength += end - start;
      start = arr[i][0];
      end = arr[i][1];
    }
    // console.log(start, end);
  }

  totalLength += end - start;

  return totalLength;
};

console.log(
  sol(
    T,
    input.map((v) => v.split(" ").map(Number))
  )
);
