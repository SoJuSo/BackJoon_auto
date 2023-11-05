// https://www.acmicpc.net/problem/11507

/*
let fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().trim().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); //백준

// console.log(input);
const inputString = input[0];

// console.log(inputString);

// P, K, H, T
// 중복되면 GRESKA
// 아니라면 13에서 하나씩 빼서 출력
let obj = {};
let greskaChecker = true;
for (let i = 0; i < inputString.length; i += 3) {
  this.string = inputString.slice(i, i + 3).split("");
  const [alphabet, cardNumber] = [
    this.string.shift(),
    Number(this.string[0] + this.string[1]),
  ];
  //   console.log(this.string[0], this.string[1]);
  //   console.log(alphabet, cardNumber);
  if (obj[alphabet] === undefined) {
    obj[alphabet] = [cardNumber];
  } else {
    if (obj[alphabet].includes(cardNumber)) {
      console.log(`GRESKA`);
      greskaChecker = false;
      break;
    } else {
      obj[alphabet] = [...obj[alphabet], cardNumber];
    }
  }
}

if (greskaChecker) {
  const answerArray = ["P", "K", "H", "T"];
  let answer = "";

  for (let i = 0; i < 4; i++) {
    if (obj[answerArray[i]]) {
      // console.log(obj[answerArray[i]]);
      answer += String(13 - obj[answerArray[i]].length);
    } else {
      answer += "13";
    }

    if (i < 3) {
      answer += " ";
    }
  }

  console.log(answer);
}
*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const inputString = input[0];
  let obj = {};
  let greskaChecker = true;
  for (let i = 0; i < inputString.length; i += 3) {
    this.string = inputString.slice(i, i + 3).split("");
    const [alphabet, cardNumber] = [
      this.string.shift(),
      Number(this.string[0] + this.string[1]),
    ];
    //   console.log(this.string[0], this.string[1]);
    //   console.log(alphabet, cardNumber);
    if (obj[alphabet] === undefined) {
      obj[alphabet] = [cardNumber];
    } else {
      if (obj[alphabet].includes(cardNumber)) {
        console.log(`GRESKA`);
        greskaChecker = false;
        break;
      } else {
        obj[alphabet] = [...obj[alphabet], cardNumber];
      }
    }
  }

  if (greskaChecker) {
    const answerArray = ["P", "K", "H", "T"];
    let answer = "";

    for (let i = 0; i < 4; i++) {
      if (obj[answerArray[i]]) {
        // console.log(obj[answerArray[i]]);
        answer += String(13 - obj[answerArray[i]].length);
      } else {
        answer += "13";
      }

      if (i < 3) {
        answer += " ";
      }
    }

    console.log(answer);
  }
});
