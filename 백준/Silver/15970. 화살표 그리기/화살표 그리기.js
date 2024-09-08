// https://www.acmicpc.net/problem/15970

const fs = require("fs");
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(0, 'utf-8').toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num, arr) => {
  // 아이디어
  // 화살표의 개수 = 점의 개수
  // 객체형태로 색상별로 분류한 뒤 정렬 후 가장 가까운 점을 찾는다.
  const obj = {};
  arr.forEach((val) => {
    const [p, q] = val.split(" ");

    obj[q] === undefined ? (obj[q] = [+p]) : obj[q].push(+p);
  });

  let answer = 0;
  Object.values(obj).forEach((val) => {
    const color = val.sort((a, b) => a - b);
    color.forEach((cur, idx) => {
      if (idx === 0) answer += color[idx + 1] - cur;
      else if (idx === color.length - 1) answer += cur - color[idx - 1];
      else {
        const min = Math.min(cur - color[idx - 1], color[idx + 1] - cur);
        answer += min;
      }
    });
  });

  return answer;
};

console.log(sol(N, input));
