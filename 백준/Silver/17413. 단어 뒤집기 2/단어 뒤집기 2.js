let fs = require("fs");
// let input = fs.readFileSync("example.txt").toString().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

//아이디어
//조건에 따라서 문자열, 태그 별로 구분한다.
//일단 문자열이 나오면 뒤집어 준다. 근데 태그 안에 있는 애는 보호처리
//시작!!
//틀린 점 -> 단어를 구분하지 않고 통째로 뒤집어 버렸다
let answer = "";
let str = input[0];
//<>태그를 포함하는 경우
let temp = [];
let temp2 = [];
if (str.includes("<") || str.includes(">")) {
  const str2 = str.split("");
  let tmp_char = "";
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] == ">" || str2[i] == "<") {
      tmp_char = str2[i]; //tmp_char에 현재 괄호 상태 업데이트
    }
    if (tmp_char == "<" || str2[i] == ">") {
      if (temp2.length > 0) {
        answer += temp2.reverse().join("");
        temp2 = [];
      }
      temp.push(str2[i]);
      if (i == str2.length - 1) {
        answer += temp.join("");
      }
    } else {
      if (temp.length > 0) {
        answer += temp.join("");
        temp = [];
      }
      if (str2[i] == " ") {
        answer += temp2.reverse().join("");
        temp2 = [];
        answer += " ";
      } else {
        temp2.push(str2[i]);
      }
      if (i == str2.length - 1) {
        answer += temp2.reverse().join("");
      }
    }
  }
} else {
  str = str.split(" ");
  //포함하지 않는 경우
  //완료 13:20
  for (let i = 0; i < str.length; i++) {
    temp.push(str[i].split("").reverse().join(""));
    if (i == str.length - 1) {
      answer = temp.join(" ");
    }
  }
}

console.log(answer);
