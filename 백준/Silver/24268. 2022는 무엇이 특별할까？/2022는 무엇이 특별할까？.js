// https://www.acmicpc.net/problem/24268

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);

const sol = (n, d) => {
  const getPermutations = (arr) => {
    if (arr.length === 0) return [[]];
    const first = arr[0];
    const rest = arr.slice(1);
    const permsWithoutFirst = getPermutations(rest);
    const result = [];

    permsWithoutFirst.forEach((perm) => {
      for (let i = 0; i <= perm.length; i++) {
        const newPerm = [...perm.slice(0, i), first, ...perm.slice(i)];
        result.push(newPerm);
      }
    });

    return result;
  };

  let answer = [];

  for (let i = 0; i < d; i++) {
    const availableDigits = Array.from({ length: d }, (_, idx) => idx).filter((num) => num !== i);
    const permutations = getPermutations(availableDigits);

    for (const perm of permutations) {
      const numString = i.toString() + perm.join("");
      if (numString[0] == 0) continue;
      const x = parseInt(numString, d);
      if (x > n) {
        answer.push(x);
      }
    }
  }

  answer.sort((a, b) => a - b);

  if (answer[0]) return answer[0];
  else return -1;
};

console.log(sol(N, M));
