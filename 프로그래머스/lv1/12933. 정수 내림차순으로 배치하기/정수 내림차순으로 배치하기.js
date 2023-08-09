function solution(n) {
    // var answer = 0;
    // console.log(String(n).split('').sort(function(a,b){return b - a;}).join(''))
    return Number(String(n).split('').sort(function(a,b){return b - a;}).join(''));
}