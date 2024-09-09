// https://www.acmicpc.net/problem/17219

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);

const sol = (num, TC, arr) => {
  // 아이디어
  // 단순 구현인데
  // 배열을 쓰면 효율이 안좋으니 객체를 씁시다.
  const answer = [];
  const list = arr.splice(0, num);

  const sites = {};
  list.forEach((val) => {
    const [name, password] = val.split(" ");
    sites[name] = password;
  });

  arr.forEach((val) => {
    answer.push(sites[val]);
  });

  return answer.join("\n");
};

console.log(sol(N, M, input));
