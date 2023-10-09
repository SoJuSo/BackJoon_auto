// https://www.acmicpc.net/problem/1316

let fs = require("fs");
const { type } = require("os");
// let input = fs.readFileSync("example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
//아이디어
//주어진 횟수만큼 순회하며 문자열을 체크한다.
// 우선 문자열을 배열로 나누어 순회하다가 처음 마주한 단어는 temp에 넣고 이전 단어와 현재 단어가 같으면 지속하고
// 그렇지 않으면 false를 리턴하는 함수를 구현한다.

const N = Number(input[0]);
input.shift();
const words = input;
let answer = 0;

// console.log(N, words);
for (let i = 0; i < N; i++) {
  let temp = [];
  let checker = true;
  words[i].split("").forEach((val, index) => {
    // console.log(temp.includes(val), words[i].split("")[index - 1] !== val);
    // console.log(val);
    if (!temp.includes(val)) {
      temp.push(val);
    } else if (temp.includes(val) && words[i].split("")[index - 1] !== val) {
      checker = false;
    }
  });
  //   console.log(words[i], checker);
  checker && answer++;
}

console.log(answer);
