// https://www.acmicpc.net/problem/24090

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, K] = input.shift().split(" ").map(Number);
let array = input.shift().split(" ").map(Number);
let cnt = 0;
let result = -1;

function quickSort(A, p, r) {
  if (p < r) {
    let q = partition(A, p, r); // 분할
    if (result !== -1) return; // 이미 결과가 도출되었으면 종료
    quickSort(A, p, q - 1); // 왼쪽 부분 배열 정렬
    if (result !== -1) return; // 이미 결과가 도출되었으면 종료
    quickSort(A, q + 1, r); // 오른쪽 부분 배열 정렬
  }
}

function partition(A, p, r) {
  let x = A[r]; // 기준원소
  let i = p - 1; // i는 x보다 작거나 작은 원소들의 끝지점

  // j는 아직 정해지지 않은 원소들의 시작 지점
  for (let j = p; j < r; j++) {
    // i값 증가 후 A[i], A[j] 교환
    if (A[j] <= x) {
      i++;
      [A[i], A[j]] = [A[j], A[i]];

      // K 번째 교환
      if (++cnt == K) {
        result = `${Math.min(A[i], A[j])} ${Math.max(A[i], A[j])}`;
        return;
      }
    }
  }

  // i + 1과 r이 서로 다르면 A[i + 1]과 A[r]을 교환
  if (i + 1 !== r) {
    [A[i + 1], A[r]] = [A[r], A[i + 1]];

    // K 번째 교환
    if (++cnt == K) {
      result = `${Math.min(A[r], A[i + 1])} ${Math.max(A[r], A[i + 1])}`;
      return;
    }
  }

  return i + 1;
}

const sol = (n, k, arr) => {
  quickSort(arr, 0, n - 1);

  if (result === -1) {
    console.log(`-1`);
  } else {
    console.log(result);
  }
};

sol(N, K, array);
