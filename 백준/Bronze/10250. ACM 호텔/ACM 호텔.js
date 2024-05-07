//https://www.acmicpc.net/problem/10250

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const TC = Number(input.shift());

for (let i = 0; i < TC; i++) {
  const [height, width, targetNumber] = input.shift().split(" ").map(Number);
  //   console.log(height, width, targetNumber);

  const floor = targetNumber % height;
  const room = Math.ceil(targetNumber / height);
  const targetFloor = floor === 0 ? height.toString() : floor.toString();
  const targetRoom = room < 10 ? "0" + room.toString() : room.toString();
  console.log(targetFloor + targetRoom);
}
