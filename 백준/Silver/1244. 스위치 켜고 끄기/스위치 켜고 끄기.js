// https://www.acmicpc.net/problem/1244

let fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().split("\r\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// 남학생, 할당 받은 수의 배수 위치이면 스위치 상태를 바꾼다.
// 여학생, 할당 받은 수에서 좌우 상태가 달라질때까지 확인 후, 좌우 상태가 다른 경우만 바꾼다.

const switchLength = Number(input.shift());
const switchArray = input.shift().split(" ");
const studentCount = Number(input.shift());

// console.log(switchLength, switchArray, studentCount, input);

for (let i = 0; i < studentCount; i++) {
  const [currentStudentGender, currentStudentNumber] = input[i].split(" ").map(Number);
  //   console.log(currentStudentGender, currentStudentNumber);
  if (currentStudentGender === 1) {
    // 남성인 경우
    for (let j = 1; j * currentStudentNumber <= switchLength; j++) {
      const targetSwitch = j * currentStudentNumber;
      switchArray[targetSwitch - 1] == 0
        ? (switchArray[targetSwitch - 1] = "1")
        : (switchArray[targetSwitch - 1] = "0");
    }
  } else if (currentStudentGender === 2) {
    // 여성인 경우
    let moveCounter = 0;
    let leftCounter = currentStudentNumber;
    let rightCounter = currentStudentNumber;
    while (currentStudentNumber - moveCounter > 1) {
      moveCounter++;
      //   console.log(
      //     "비교지표",
      //     currentStudentNumber - moveCounter,
      //     currentStudentNumber + moveCounter,
      //     switchArray[currentStudentNumber - moveCounter - 1],
      //     switchArray[currentStudentNumber + moveCounter - 1]
      //   );
      if (
        switchArray[currentStudentNumber - moveCounter - 1] ===
        switchArray[currentStudentNumber + moveCounter - 1]
      ) {
        leftCounter--;
        rightCounter++;
      } else {
        break;
      }
    }
    // console.log(leftCounter, rightCounter);
    for (let k = leftCounter - 1; k <= rightCounter - 1; k++) {
      switchArray[k] == 0 ? (switchArray[k] = "1") : (switchArray[k] = "0");
      //   console.log(k);
    }
  }
}

const chunk = (inputArray) => {
  const answerArray = [];
  for (let i = 0; i < inputArray.length; i += 20) {
    answerArray.push(inputArray.slice(i, i + 20));
  }
  return answerArray;
};

if (switchArray.length > 20) {
  const answer = chunk(switchArray);
  answer.map((val) => console.log(val.join(" ")));
} else {
  console.log(switchArray.join(" "));
}

// 8
// 1 0 0 0 1 1 0 1
// 1
// 2 4

// 8
// 0 1 0 1 0 0 0 1
// 2
// 1 3
// 2 3
