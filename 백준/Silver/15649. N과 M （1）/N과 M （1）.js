// https://www.acmicpc.net/problem/15649

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const [N, M] = input[0].split(" ").map(Number);

const arr = Array(M).fill(0);
const visited = Array(N + 1).fill(false);

// function backTracking(k) {
//   if (k === M) {
//     console.log(arr.join(" "));
//     return;
//   }

//   for (let i = 1; i <= N; i++) {
//     if (!visited[i]) {
//       arr[k] = i; // k번째 수를 i로 정함
//       visited[i] = true; // i를 사용되었다고 표시
//       backTracking(k + 1); // 다음 수를 정하러 한 단계 더 들어감
//       visited[i] = false; // k번째 수를 i로 정한 모든 경우에 대해 다 확인했으니 i를 이제 사용되지않았다고 명시함.
//     }
//   }
// }

// backTracking(0);
dfs(0); // lev는 0에서 시작한다.

function dfs(lev) {
  if (lev === M) {
    // lev이 M과 같을때 return한다.
    console.log(arr.join(" ")); // 현재 arr에 들어있는 값을 출력한다.
    return;
  }

  for (let i = 1; i <= N; i++) {
    // console.log("i = " + i);
    if (visited[i]) {
      continue;
    }
    arr[lev] = i; // 현재값을 현재 깊이에 추가해준다.
    visited[i] = true;
    dfs(lev + 1); // M의 깊이만큼 계속 lev을 증가시켜준다.
    visited[i] = false; // lev이 M과 같아질때 return이 되면 여기로 넘어와 방금 방문한곳을 false처리 한다.
  }
}
