function solution(a, b) {
    var answer = 0;
    console.log(Math.max(a,b))
    for(let i = Math.min(a,b); i <= Math.max(a,b); i++){
        answer += i;
    }
    return answer;
}