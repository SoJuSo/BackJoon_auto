// https://www.acmicpc.net/problem/4158

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);
const answer = [];

while (1) {
  const [N, M] = input.shift().split(" ").map(Number);
  if (N === 0 && M === 0) break;
  //   input.pop();

  //   console.log(N, M, input);
  const N_array = input.splice(0, N);
  const M_array = input.splice(0, M);

  //   console.log(N_array, M_array);

  // 정렬 필요?
  //   N_array.sort((a, b) => a - b);
  //   M_array.sort((a, b) => a - b);
  // // console.log(N_array, M_array, N, M);

  let Nth_index = 0;
  let Mth_index = 0;
  let count = 0;

  // console.log(Nth_index < N && Mth_index < M);
  // console.log(Nth_index, Mth_index);
  // console.log(input[Nth_index], input[Mth_index]);

  while (Nth_index < N && Mth_index < M) {
    //   console.log(Nth_index, Mth_index);
    //   console.log(input[Nth_index], input[Mth_index]);
    if (Number(N_array[Nth_index]) === Number(M_array[Mth_index])) {
      count++;
      Nth_index++;
      Mth_index++;
    } else if (Number(N_array[Nth_index]) > Number(M_array[Mth_index])) {
      Mth_index++;
    } else {
      Nth_index++;
    }
  }
  answer.push(count);
  //   console.log(count);
}
answer.map((val) => console.log(val));
