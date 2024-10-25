// https://www.acmicpc.net/problem/2765

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  // 아이디어
  // 구현
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    const [지름, 회전수, 시간] = arr[i].split(" ").map(Number);
    if (회전수 === 0) break;
    answer.push(
      `Trip #${i + 1}: ${((((지름 / 12) * 회전수) / 5280) * 3.1415927).toFixed(2)} ${(
        ((((지름 / 12) * 회전수) / 5280) * 3.1415927 * 3600) /
        시간
      ).toFixed(2)}`
    );
  }
  return answer.join("\n");
};

console.log(sol(input));
