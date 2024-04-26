const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const filtered = {};

input[0].split("").forEach((val) => {
  if (filtered[val] === undefined) {
    filtered[val] = 1;
  } else if (filtered[val]) {
    filtered[val]++;
  }
});

const filteredArray = Object.entries(filtered).sort((a, b) => {
  return a[0] > b[0] ? 1 : -1;
});

const solution = (array) => {
  let oddCounter = 0;
  let oddPosition = "";
  const head = [];
  array.forEach((val) => {
    // console.log(val);
    if (val[1] % 2 === 1) {
      oddCounter++;
      oddPosition = val[0];
      //   console.log(val[1] / 2);
      for (let i = 0; i < Math.floor(val[1] / 2); i++) {
        head.push(val[0]);
      }
    } else {
      //   console.log(val[1] / 2);
      for (let i = 0; i < val[1] / 2; i++) {
        head.push(val[0]);
      }
    }
  });
  if (oddCounter > 1) {
    console.log("I'm Sorry Hansoo");
  } else {
    const middle = [];
    if (oddPosition !== "") {
      middle.push(oddPosition);
    }
    const tail = [...head].reverse().join("");
    console.log(head.join("") + middle.join("") + tail);
  }
};

// console.log(Object.entries(filtered), filteredArray);
solution(filteredArray);
