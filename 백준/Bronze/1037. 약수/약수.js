const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 여기에 풀이 작성
  const [N, Array] = [Number(input[0]), input[1].split(" ").map(Number)];
  console.log(Math.max(...Array) * Math.min(...Array));
});
