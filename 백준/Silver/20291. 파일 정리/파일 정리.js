// https://www.acmicpc.net/problem/20291

const fs = require("fs");
// const input = fs.readFileSync("0_example.txt").toString().split("\r\n"); //vscode
const input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
const [N, Array] = [Number(input.shift()), input];
// console.log(N, Array);

const answer = {};
const output = [];
for (let i = 0; i < N; i++) {
  const str = Array[i].split(".")[1];
  //   console.log(str);
  //   console.log(answer[str]);
  if (answer[str] === undefined) {
    answer[str] = 1;
  } else {
    answer[str]++;
  }
}

for (const index in answer) {
  output.push([index, answer[index]]);
}

output.sort((a, b) => {
  const stringA = a[0];
  const stringB = b[0];

  if (stringA < stringB) {
    return -1;
  } else if (stringA > stringB) {
    return 1;
  } else {
    return 0;
  }
});
// console.log(output);
for (const index of output) {
  console.log(index[0], index[1]);
}
