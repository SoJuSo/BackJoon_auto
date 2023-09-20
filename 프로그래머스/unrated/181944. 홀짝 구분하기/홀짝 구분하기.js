//아이디어
//삼항연산자와 백틱 사용해서 간단하게
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    console.log(n % 2 == 0 ? `${n} is even` : `${n} is odd`)
});