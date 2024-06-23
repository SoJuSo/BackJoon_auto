// https://www.acmicpc.net/problem/27889

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

switch (input[0]) {
  case "NLCS":
    console.log(`North London Collegiate School`);
    break;
  case "BHA":
    console.log(`Branksome Hall Asia`);
    break;
  case "KIS":
    console.log(`Korea International School`);
    break;
  case "SJA":
    console.log(`St. Johnsbury Academy`);
    break;
}
