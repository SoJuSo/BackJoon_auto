// 주석 포함
// https://www.acmicpc.net/problem/15686

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [n, m] = input.shift().split(" ").map(Number);

const cords = input.map((v) => v.split(" ").map(Number));

// 배열 arr에서 k개의 요소를 선택하는 모든 조합을 반환하는 함수
const getCombinations = (arr, k) => {
  let results = [];
  // k가 1일 경우, arr의 각 요소를 개별 배열로 변환하여 반환한다.
  if (k === 1) {
    return arr.map((e) => [e]); // 예: [a, b, c] -> [[a], [b], [c]]
  }
  // arr의 각 요소에 대해 순회한다.
  arr.forEach((current, index) => {
    // 현재 요소 이후의 요소들로 이루어진 배열을 생성한다.
    const remaining = arr.slice(index + 1);
    // remaining 배열에 대해 재귀적으로 k-1 길이의 조합을 생성한다.
    const combinations = getCombinations(remaining, k - 1);
    // 현재 요소를 각 조합의 앞에 붙여 새로운 조합을 생성한다.
    const attached = combinations.map((combination) => [current, ...combination]);
    // 결과 배열에 새로운 조합을 추가한다.
    results = results.concat(attached);
  });
  // 최종적으로 모든 조합이 포함된 results 배열을 반환한다.
  return results;
};

const sol = (num, chicken, arr) => {
  let answer = Infinity;
  const houses = [];
  const kfc = [];
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (arr[i][j] === 1) {
        houses.push([i, j]);
      } else if (arr[i][j] === 2) {
        kfc.push([i, j]);
      }
    }
  }

  getCombinations(kfc, chicken).forEach((chi) => {
    let temp = 0;
    houses.forEach((h) => {
      let chi_len = Infinity;
      chi.forEach((c) => {
        chi_len = Math.min(chi_len, Math.abs(h[0] - c[0]) + Math.abs(h[1] - c[1]));
      });
      temp += chi_len;
    });
    answer = Math.min(answer, temp);
  });

  return answer;
};
console.log(sol(n, m, cords));
