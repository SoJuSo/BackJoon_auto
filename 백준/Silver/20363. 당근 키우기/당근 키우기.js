// https://www.acmicpc.net/problem/20363

let fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
const [X, Y] = input[0].split(" ").map(Number);
// console.log(X, Y);
console.log(Math.floor(X + Y + Math.min(X, Y) / 10));
// let sunshine = 0, // 햇빛
//   heat = 0, // 온기
//   water = 0, // 물
//   humid = 0, // 수분
//   temp = 0; // 임시 저장소

// while (heat !== X || humid !== Y) {
//   if (X > Y) {
//     // 햇빛이 더 많은 케이스
//     if (heat === X) {
//       water++;
//       humid++;
//       temp++;
//       if (temp === 10) {
//         heat--;
//         temp = 0;
//       }
//     } else {
//       heat++;
//       sunshine++;
//     }
//   } else if (X === Y) {
//     // console.log(heat, water, sunshine, humid);
//     if (heat === X) {
//       //   console.log(heat, water, sunshine, humid);
//       water++;
//       humid++;
//       temp++;
//       if (temp === 10) {
//         heat--;
//         temp = 0;
//       }
//     } else {
//       heat++;
//       sunshine++;
//     }
//   } else {
//     //물이 더 많은 케이스
//     if (humid === Y) {
//       heat++;
//       sunshine++;
//       temp++;
//       if (temp === 10) {
//         humid--;
//         temp = 0;
//       }
//     } else {
//       water++;
//       humid++;
//     }
//   }

//   if (heat < 0) {
//     heat = 0;
//   }
//   if (humid < 0) {
//     humid = 0;
//   }
// }

// console.log(sunshine, water);
// console.log(sunshine + water);
