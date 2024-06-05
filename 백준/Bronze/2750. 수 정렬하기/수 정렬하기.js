let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let arr = input.map(Number);

let n = arr[0];
arr.shift();
arr = arr.sort((a,b)=>a-b);

var ans = ''

for(let i = 0; i < n; i++){
  ans += arr[i] + '\n';
}

console.log(ans);