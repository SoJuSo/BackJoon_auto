// https://www.acmicpc.net/problem/9375

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

// console.log(input);
const TestCase = Number(input.shift());

for (let i = 0; i < TestCase; i++) {
  const cloth = Number(input.shift());
  const clothObject = new Object();
  for (let j = 0; j < cloth; j++) {
    const currentCloth = input.shift().split(" ");
    if (clothObject[currentCloth[1]] === undefined) {
      clothObject[currentCloth[1]] = [currentCloth[0]];
    } else if (clothObject[currentCloth[1]]) {
      clothObject[currentCloth[1]].push(currentCloth[0]);
    }
  }

  const result = Object.values(clothObject);

  result.forEach((val) => {
    val.push(null);
  });

  //   console.log(result);

  //   let count = 0;
  //   let combine = result.length > 1 ? 1 : 0;

  // 조합? 순열? 이건 조합문제이다.
  // 중복없는 점화식 필요?
  // 경우의 수 문제
  // 뭘 놓치고 있을까.,.,.,.

  // 핵심 >> 아무것도 입지 않을 수 있는 경우가 추가됌
  // 따라서 아무것도 입지 않는 경우를 오히려 추가해야함
  // 근데 모두 null일경우는 빼줘야하니 -1

  let answer = 1;

  //   for (const val of Object.values(result)) {
  //     answer *= val.length;
  //   }

  result.forEach((val) => {
    answer *= val.length;
    // count += val.length;
    // combine *= val.length;
    // console.log(count, combine);
  });

  console.log(answer - 1);
  //   console.log(answer - 1);
  //   console.log(count + (count * (count - 1)) / 2);
  //   console.log(clothObject);
  //   console.log(Object.values(clothObject));
}
