const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, arr] = [input.shift(), input.map(Number).sort((a, b) => a - b)];

  arr.map((val) => {
    console.log(val);
  });
});
