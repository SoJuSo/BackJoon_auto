const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
//아이디어
//개인적으로 이런 형식의 JS 문제형태도 많이 경험해보아야겠다.. 생각보다 처음 보면 당황스럽다
//str1이랑 str2가 이미 문제에서 나뉘어서.그냥 더해서 출력해준다.

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    console.log(str1 + str2)
});