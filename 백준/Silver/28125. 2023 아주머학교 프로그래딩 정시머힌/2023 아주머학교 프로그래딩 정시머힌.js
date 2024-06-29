// https://www.acmicpc.net/problem/28125

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const n = +input.shift();

const answer = [];
for (let i = 0; i < n; i++) {
  let str = "";
  let cnt = 0;
  const cur = input[i].split("");
  for (let j = 0; j < cur.length; j++) {
    if (cur[j] == "@") {
      str += "a";
      cnt++;
    } else if (cur[j] == "[") {
      str += "c";
      cnt++;
    } else if (cur[j] == "!") {
      str += "i";
      cnt++;
    } else if (cur[j] == ";") {
      str += "j";
      cnt++;
    } else if (cur[j] == "^") {
      str += "n";
      cnt++;
    } else if (cur[j] == "0") {
      str += "o";
      cnt++;
    } else if (cur[j] == "7") {
      str += "t";
      cnt++;
    } else if (cur[j] == "\\") {
      if (cur[j + 1] == "'") {
        j++;
        str += "v";
        cnt++;
      } else if (cur[j + 1] == "\\" && cur[j + 2] == "'") {
        j += 2;
        str += "w";
        cnt++;
      }
    } else {
      str += cur[j];
    }
  }
  answer.push(str.split("").length / 2 <= cnt ? "I don't understand" : str);
}

console.log(answer.join("\n"));
