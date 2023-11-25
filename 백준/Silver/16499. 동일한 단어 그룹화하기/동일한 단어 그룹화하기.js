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
  const [N, Array] = [Number(input.shift()), input];
  const object = {};
  let answer = 0;
  const sortedArray = Array.map((value) => value.split("").sort().join(""));
  // console.log(N, sortedArray);
  sortedArray.map((value) => {
    object[value] === undefined ? (object[value] = 1) : object[value]++;
  });
  for (const value in object) {
    object[value] > 0 ? answer++ : 0;
  }
  console.log(answer);
});
