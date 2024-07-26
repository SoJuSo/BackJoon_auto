// https://www.acmicpc.net/problem/16501

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const list = input.shift().split(" ").map(Number);

function getPermutations(arr) {
  const result = [];
  if (arr.length === 0) return [[]];

  for (let i = 0; i < arr.length; i++) {
    const rest = getPermutations(arr.slice(0, i).concat(arr.slice(i + 1)));
    for (const perm of rest) {
      result.push([arr[i], ...perm]);
    }
  }

  return result;
}

function getSatisfaction(teamScoreList) {
  return (
    1 -
    Math.abs(
      (teamScoreList[0] + teamScoreList[1]) / 2 - (teamScoreList[2] + teamScoreList[3]) / 2
    ) /
      10
  );
}

const sol = (arr) => {
  const perms = getPermutations(arr);

  let answer = 0;

  for (const per of perms) {
    const team1_satisfaction = getSatisfaction(per.slice(0, 4));
    const team2_satisfaction = getSatisfaction(per.slice(4));

    const min_satisfaction = Math.min(team1_satisfaction, team2_satisfaction);
    if (answer < min_satisfaction) {
      answer = min_satisfaction;
    }
  }

  return Number.isInteger(answer * 10) ? answer.toFixed(1) : answer.toFixed(2);
};

console.log(sol(list));
