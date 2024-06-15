//https://www.acmicpc.net/problem/29751

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [_, K] = input.shift().split(" ").map(Number);
const list = input.shift().split(" ").map(Number);

const bubbleSort = (arr, count) => {
  let bubble = 0;
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let x = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = x;
        bubble += 1;
      }
      if (bubble === count) break;
    }
    if (bubble === count) break;
  }
  return bubble < count ? [] : arr;
};

const result = bubbleSort(list, K);

console.log(result.length === 0 ? -1 : result.join(" "));
