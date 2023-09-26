let fs = require("fs");
// let input = fs.readFileSync("example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

//아이디어
//문제를 잘 읽자..
//일단 첫 단어의 길이에서 하나차이, 그리고 문자가 최소 첫단어의 길이 - 1만큼은 같아야한다.

const num = input[0];
const str_len = input[1].length;
let answer = 0;

for (let i = 2; i <= num; i += 1) {
  const str = input[1].split("");
  const tmp_str = input[i].split("");
  let checker = true;
  //길이 체크
  if (tmp_str.length - str_len >= -1 && tmp_str.length - str_len <= 1) {
    checker = true;
  }
  //문자열 체크
  let temp = 0;
  for (let l = 0; l < tmp_str.length; l++) {
    if (str.includes(tmp_str[l])) {
      str[str.findIndex((val) => val == tmp_str[l])] = 1;
      // str[l] = 1; //대문자만이니까 상관없는 1로 바꿔주기
    } else {
      temp++;
    }
  }

  let cnt = 0;
  // console.log(str, tmp_str, i, cnt, temp);
  str.forEach((val) => {
    if (val != 1) {
      cnt++;
    }
  });

  if (cnt > 1 || temp > 1) {
    checker = false;
  }

  if (checker) {
    answer++;
  }
}

console.log(answer);
