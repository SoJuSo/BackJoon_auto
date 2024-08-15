// https://www.acmicpc.net/problem/13335

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, W, L] = input.shift().split(" ").map(Number);
const list = input.shift().split(" ").map(Number);

const sol = (n, w, l, arr) => {
  // n 트럭 갯수
  // w 다리 길이
  // l 다리 최대 하중

  let currentWeight = 0;
  let totalTime = 0;
  const queue = Array.from({ length: w }, () => 0); // 다리의 길이만큼 초기화된 배열

  while (arr.length || currentWeight > 0) {
    totalTime++;

    // 다리에서 트럭이 나가는 경우
    currentWeight -= queue.shift();

    // 다음 트럭을 다리에 올릴 수 있는 경우
    if (arr.length > 0 && currentWeight + arr[0] <= l) {
      const nextTruck = arr.shift();
      queue.push(nextTruck);
      currentWeight += nextTruck;
    } else {
      queue.push(0); // 다리에 트럭이 없으면 0을 추가
    }
  }

  return totalTime;
};

console.log(sol(N, W, L, list));
