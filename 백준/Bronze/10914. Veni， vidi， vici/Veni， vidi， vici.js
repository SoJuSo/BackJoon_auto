// https://www.acmicpc.net/problem/10914

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (key, list) => {
  // 아이디어
  // 구현
  const answer = [];
  list.forEach((val) => {
    const curLen = val.length;
    let result = "";

    for (let i = 0; i + 1 < curLen; i += 2) {
      let c =
        (val.charCodeAt(i) - "a".charCodeAt(0) + (val.charCodeAt(i + 1) - "a".charCodeAt(0)) + 26 - key) % // 암호화 키를 적용
        26;
      c = String.fromCharCode(c + "a".charCodeAt(0));
      result += c;
    }
    answer.push(result);
  });
  return answer.join(" ");
};

console.log(sol(N, input.shift().split(" ")));
