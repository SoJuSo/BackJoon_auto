// https://www.acmicpc.net/problem/1065

let fs = require("fs");
// let input = fs.readFileSync("e.txt").toString().split("\r\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

//아이디어
//등차수열, 각 자리수 간 규칙이 등차수열을 이룬다면 그 수를 한수라고 한다.

const N = Number(input[0]); //주어진 input N
let answer = 0; // 정답을 담는 변수 answer

for (let i = 1; i <= N; i += 1) {
  const arr = String(i).split(""); //비교해야 하므로 문자열화 해서 배열에 담아준다.
  let TF = true; //한수인지 아닌지 판별해주는 bool 변수

  let diff_1 = arr[1] - arr[0];
  for (let j = 0; j < arr.length; j++) {
    //반복문을 돌며
    if (arr.length <= 2) {
      //어차피 두 자리수까지는 무조건 맞다.
      break;
    } else {
      //세자리수 ~ 네자리수
      if (j > 0) {
        let diff_2 = arr[j] - arr[j - 1];
        diff_1 != diff_2 ? (TF = false) : 0;
        // console.log(arr, diff_1, diff_2, TF);
      }
    }
  }
  //   console.log(arr, diff_1, diff_2, TF);

  TF ? answer++ : 0;
  //   console.log(arr);
}

console.log(answer);
