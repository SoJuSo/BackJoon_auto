// https://www.acmicpc.net/problem/9375

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

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

  let answer = 1;

  result.forEach((val) => {
    answer *= val.length;
  });

  console.log(answer - 1);
}
