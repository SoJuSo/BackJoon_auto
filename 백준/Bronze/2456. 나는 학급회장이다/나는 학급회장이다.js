// https://www.acmicpc.net/problem/2456

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num, list) => {
  // 아이디어
  // 구현
  const obj = {
    1: { 1: 1, count: 0, one: 0, two: 0, three: 0 },
    2: { 1: 2, count: 0, one: 0, two: 0, three: 0 },
    3: { 1: 3, count: 0, one: 0, two: 0, three: 0 },
  };
  list.forEach((val) => {
    val.split(" ").forEach((cur, idx) => {
      obj[idx + 1].count += +cur;
      switch (+cur) {
        case 1:
          obj[idx + 1].one++;
          break;
        case 2:
          obj[idx + 1].two++;
          break;
        case 3:
          obj[idx + 1].three++;
          break;
      }
    });
  });

  const arr = Object.entries(obj);
  let max = Object.entries(obj)[0][1];

  let status = true;

  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i][1];
    if (max.count < cur.count) {
      status = true;
      max = cur;
    } else if (max.count === cur.count) {
      if (max.three < cur.three) {
        status = true;
        max = cur;
      } else if (max.three === cur.three) {
        if (max.two < cur.two) {
          status = true;
          max = cur;
        } else if (max.two === cur.two) {
          status = false;
        }
      }
    }
  }
  return status
    ? `${max[1]} ${max.count}`
    : `0 ${Math.max(arr[0][1].count, arr[1][1].count, arr[2][1].count)}`;
};

console.log(sol(N, input));
