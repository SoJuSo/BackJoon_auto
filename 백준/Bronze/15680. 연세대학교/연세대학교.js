//https://www.acmicpc.net/submit/15680

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

console.log(input[0] == 0 ? `YONSEI` : `Leading the Way to the Future`);
