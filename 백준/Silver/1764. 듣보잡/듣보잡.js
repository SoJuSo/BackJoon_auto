const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);

const sol = (듣도, 보도, arr) => {
  const 듣도list = new Set(arr.slice(0, 듣도));
  const answer = [];

  arr.slice(듣도, 듣도 + 보도).forEach((val) => {
    if (듣도list.has(val)) {
      answer.push(val);
    }
  });

  answer.sort();
  return answer.length + "\n" + answer.join("\n");
};

console.log(sol(N, M, input));
