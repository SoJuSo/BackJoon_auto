const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const name = input[0];
const vowels = ["a", "e", "i", "o", "u"];
let retVal = name;

for (let idx = name.length - 1; idx >= 0; idx--) {
  if (vowels.includes(name[idx].toLowerCase())) {
    retVal = name.slice(0, idx + 1) + "ntry";
    break;
  }
}

console.log(retVal);
