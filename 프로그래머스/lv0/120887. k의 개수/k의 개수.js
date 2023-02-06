function solution(i, j, k) {
    var answer = 0;
    for(let a = i; a <= j; a++){
        String(a).split('').map((b) => {b == k ? answer += 1 : 0})
    }
    return answer;
}